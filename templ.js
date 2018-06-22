(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gameCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "      <main class=\"game-board\">\r\n        Draw game here. Are we going to use a grid, an array of divs?\r\n      </main>";
},"useData":true});
templates['mainCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"greeting border\">\r\n  <h1>Would you like to play a game?</h1>\r\n  <nav class=\"war-game\">\r\n    <p>\r\n      <a href=\"#\">Chess</a>\r\n    </p>\r\n    <p>\r\n      <a href=\"#\">Poker</a>\r\n    </p>\r\n    <p>\r\n      <a href=\"#\">Fighter Combat</a>\r\n    </p>\r\n    <p>\r\n      <a href=\"#\">Guerilla Engagement</a>\r\n    </p>\r\n    <p>\r\n      <a href=\"#\">Desert Warfare</a>\r\n    </p>\r\n    <p>\r\n      <a href=\"#\">Air-To-Ground Action</a>\r\n    </p>\r\n    <p>\r\n      <a href=\"#\">Theatre Wide Tactical Warfare</a>\r\n    </p>\r\n    <p>\r\n      <a href=\"#\">Theaterwide Biotioxic and Checmical Warfare</a>\r\n    </p>\r\n    <p>\r\n      <a href=\"#\">Guild Battleground Skirmish</a>\r\n    </p>\r\n    <p>\r\n      <a href=\"#\">Global Thermonuclear War</a>\r\n    </p>\r\n  </nav>\r\n</div>\r\n";
},"useData":true});
})();