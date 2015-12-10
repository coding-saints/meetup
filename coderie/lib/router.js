Router.configure({
  layoutTemplate:"layout",
  notFoundTemplate:"notFound",
  loadingTemplate:"loading",

});


Router.route("/", {
  name:"homeIndex",
});
Router.route("/roster", {
  name:"homeRoster",
});

Router.route("/news", {
  name:"homeNews",
});

Router.route("/questions", {
  name:"homeQuestions",
});
Router.route("/chat", {
  name:"meetChat",
});
