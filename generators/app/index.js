
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
        this.templatePath('earnings-chart.html'),
        this.destinationPath('earnings-chart.html')
    );
  }
});
