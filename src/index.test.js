import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import cheerio from 'cheerio';

describe('Our first test', () => {
  it('Should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', function() {
  it('should say hello', function(done) {
    const index = fs.readFileSync('./src/index.html','utf-8');
    var $ = cheerio.load(index);
    jsdom.env(index, (err, window) => {
      expect($('h1').html()).to.equal("Hello World?");
      done();
      window.close();
    })
  });
});
