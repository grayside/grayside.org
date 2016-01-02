var Metalsmith = require('metalsmith');
var http = require('http');
var join = require('path').join;
var swig = require('swig');

// Metalsmith Plugins
var aliases = require('metalsmith-alias');
var collections = require('metalsmith-collections');
var drafts = require('metalsmith-drafts');
var excerpts = require('metalsmith-better-excerpts');
var feed = require('metalsmith-feed');
var htmlMinifier = require("metalsmith-html-minifier");
var inPlace = require('metalsmith-in-place');
var layouts = require('metalsmith-layouts');
var markdown = require('metalsmith-markdown');
var metadata = require('metalsmith-metadata');
var metallic = require('metalsmith-metallic');
var pagination = require('metalsmith-pagination');
var permalinks = require('metalsmith-permalinks');
var sitemap = require('metalsmith-sitemap');
var tags = require('metalsmith-tags');
var typography = require('metalsmith-typography');
var wordCount = require('metalsmith-word-count');
var writemetadata = require('metalsmith-writemetadata');

// Local libraries
var config = require('./config.js');

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
    .use(typography())
    .use(wordCount({
      speed: 350,
      raw: true
    }))
    .use(permalinks({
        pattern: 'blog/:title',
        relative: false
    }))
    .use(feed({collection: 'posts'}))
    .use(excerpts({
      pruneLength: 260,
      stripTags: false,
      moreRegExp: /\s*<!--\s*break\s*-->/i
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
    .use(aliases({}))
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
