var Metalsmith = require('metalsmith');
var metadata = require('metalsmith-metadata');
var excerpts = require('metalsmith-better-excerpts');
var feed = require('metalsmith-feed');
var writemetadata = require('metalsmith-writemetadata');
var collections = require('metalsmith-collections');
var markdown = require('metalsmith-markdown');
var inPlace = require('metalsmith-in-place');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var tags = require('metalsmith-tags');
var drafts = require('metalsmith-drafts');
var pagination = require('metalsmith-pagination');
var metallic = require('metalsmith-metallic');
var htmlMinifier = require("metalsmith-html-minifier");
var swig = require('swig');
var join = require('path').join;
var config = require('./config.js');
var http = require('http');
var sitemap = require('metalsmith-sitemap');

swig.setDefaults({
  cache: false
});

// TODO - reorganize these tasks
module.exports = function (production) {
  var configData;

  if(production){
    configData = config.production;
  } else {
    configData = config.development;
  }
  configData.social = config.social;

  return Metalsmith(__dirname)
    .clean(false)
    .metadata(configData)
    .use(drafts())
    // render template data in markdown files
    .use(inPlace({
      engine: 'swig',
      pattern: '**/*.md'
    }))
    .use(collections({
      posts: {
        pattern: 'posts/*.md',
        sortBy: 'date',
        reverse: true
      },
      pages: {
        pattern: '*.md',
        sortBy: 'priority'
      }
    }))
    // Does not process if moved after markdown.
    .use(metallic())
    .use(markdown())
    .use(permalinks({
        pattern: 'blog/:title',
        relative: false
    }))
    .use(feed({collection: 'posts'}))
    .use(excerpts({
      pruneLength: 160
    }))
    .use(pagination({
      'collections.posts': {
        perPage: 5,
        layout: 'collection.html',
        first: 'blog/index.html',
        path: 'blog/:num/index.html'
      }
    }))
    .use(tags({
      handle: 'tags',
      layout:'tags.html',
      path:'tags/:tag/index.html',
      pathPage: 'tags/:tag/:num/index.html',
      perPage: 5,
      sortBy: 'data',
      reverse: true
    }))
    // render content into page layouts
    .use(layouts({
      engine: 'swig',
      default: 'default.html',
      directory: 'layouts'
    }))
    .use(writemetadata({
      bufferencoding: 'utf8',
      collections: {
        posts: {
          output: {
            asObject: true,
            path: 'blog/index.json',
            metadata: {
              "type": "list"
            }
          },
          ignorekeys: ['history', 'stats', 'next', 'layout', 'previous', 'collection', 'mode'],
        }
      }
    }))
    .use(sitemap({
      hostname: configData.site.url,
      defaults: {
        lastModified: Date.now()
      }
    }))
    .use(htmlMinifier())
    .destination('build/')
    .build(function(err,files){
      if (err){ console.log(err); }
      livereload();
    });
}

function livereload(){
  //  this is a hack to force live reload
  http.get("http://localhost:35729/changed?files=1", function(res) {})
    .on('error', function(e){});
}
