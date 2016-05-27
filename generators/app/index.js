//'use strict';
var generators = require('yeoman-generator');
module.exports = generators.Base.extend({

  installingVaadinCharts: function() {
      var bowerJson = {
        name: this.appname,
        private: true,
        dependencies: {}
      };
    this.fs.writeJSON('bower.json', bowerJson);
    this.bowerInstall(['webcomponentsjs'],{ 'save': true });
    this.bowerInstall(['vaadin-charts'], { 'save': true });
    this.bowerInstall(['PolymerElements/paper-button'],{'save':true});
  },

  writing: function () {
    this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('index.html')
    );
    this.fs.copyTpl(
        this.templatePath('bar-chart.html'),
        this.destinationPath('bar-chart.html')
    );
    this.fs.copyTpl(
        this.templatePath('simple-line-chart.html'),
        this.destinationPath('simple-line-chart.html')
    );
  },

  //bower: function () {
  //  var bowerJson = {
  //    name: this.appname,
  //    private: true,
  //    dependencies: {}
  //  };
  //
  //  bowerJson.dependencies['vaadin-charts'] = '';
  //
  //  this.fs.writeJSON('bower.json', bowerJson);
  //  this.fs.copy(
  //      this.templatePath('bowerrc'),
  //      this.destinationPath('.bowerrc')
  //  );
  //},



});
