$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ManageMyBooking.feature");
formatter.feature({
  "line": 2,
  "name": "To verify the functionality of MMB",
  "description": "",
  "id": "to-verify-the-functionality-of-mmb",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@MMB"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Invalid reference number",
  "description": "",
  "id": "to-verify-the-functionality-of-mmb;invalid-reference-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to the page \u0027https://www.loveholidays.com/manage/login.html\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the reference number \u0027\u003crefNum\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user clicks on sign in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user should get the error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "to-verify-the-functionality-of-mmb;invalid-reference-number;",
  "rows": [
    {
      "cells": [
        "refNum"
      ],
      "line": 11,
      "id": "to-verify-the-functionality-of-mmb;invalid-reference-number;;1"
    },
    {
      "cells": [
        "1702LCCCQV9H"
      ],
      "line": 12,
      "id": "to-verify-the-functionality-of-mmb;invalid-reference-number;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4745945607,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Invalid reference number",
  "description": "",
  "id": "to-verify-the-functionality-of-mmb;invalid-reference-number;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@MMB"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user navigates to the page \u0027https://www.loveholidays.com/manage/login.html\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the reference number \u00271702LCCCQV9H\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user clicks on sign in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user should get the error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.loveholidays.com/manage/login.html",
      "offset": 28
    }
  ],
  "location": "MMBStepDefs.gotoMmbPage(String)"
});
formatter.result({
  "duration": 3432264204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1702LCCCQV9H",
      "offset": 34
    }
  ],
  "location": "MMBStepDefs.userEntersRef(String)"
});
formatter.result({
  "duration": 1592777301,
  "status": "passed"
});
formatter.match({
  "location": "MMBStepDefs.signIn()"
});
formatter.result({
  "duration": 235883928,
  "status": "passed"
});
formatter.match({
  "location": "MMBStepDefs.errorMessageValidate()"
});
formatter.result({
  "duration": 31314812,
  "status": "passed"
});
formatter.after({
  "duration": 625758044,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Invalid reference number",
  "description": "",
  "id": "to-verify-the-functionality-of-mmb;invalid-reference-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user navigates to oiuouothe page \u0027https://www.loveholidays.com/manage/login.html\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters the reference number \u0027\u003crefNum\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the user enters \u0027Test\u0027 in the surname",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user clicks on sign in",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the error message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "to-verify-the-functionality-of-mmb;invalid-reference-number;",
  "rows": [
    {
      "cells": [
        "refNum"
      ],
      "line": 22,
      "id": "to-verify-the-functionality-of-mmb;invalid-reference-number;;1"
    },
    {
      "cells": [
        "LVE1702LCCCQV9H"
      ],
      "line": 23,
      "id": "to-verify-the-functionality-of-mmb;invalid-reference-number;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3331401927,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Invalid reference number",
  "description": "",
  "id": "to-verify-the-functionality-of-mmb;invalid-reference-number;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@MMB"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user navigates to oiuouothe page \u0027https://www.loveholidays.com/manage/login.html\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters the reference number \u0027LVE1702LCCCQV9H\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the user enters \u0027Test\u0027 in the surname",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user clicks on sign in",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the error message should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "LVE1702LCCCQV9H",
      "offset": 34
    }
  ],
  "location": "MMBStepDefs.userEntersRef(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 17
    }
  ],
  "location": "MMBStepDefs.userEntersSurname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MMBStepDefs.signIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MMBStepDefs.errorMessageDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 333014488,
  "status": "passed"
});
});