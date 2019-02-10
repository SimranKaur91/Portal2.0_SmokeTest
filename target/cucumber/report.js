$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Invisionapp.com",
  "description": "",
  "id": "invisionapp.com",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User open Invisionapp.com",
  "description": "",
  "id": "invisionapp.com;user-open-invisionapp.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User enters the url",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#    When User navigate to the Homepage"
    }
  ],
  "line": 6,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_enters_url()"
});
formatter.result({
  "duration": 12344251307,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat testSteps.Homepage.user_enters_url(Homepage.java:25)\r\n\tat ✽.Given User enters the url(Homepage.feature:4)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "Homepage.tearDown()"
});
formatter.result({
  "status": "skipped"
});
});