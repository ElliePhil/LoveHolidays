@MMB
  Feature: To verify the functionality of MMB

    Scenario Outline: Invalid reference number
      Given user navigates to the page 'https://www.loveholidays.com/manage/login.html'
      When user enters the reference number '<refNum>'
      And the user clicks on sign in
      Then the user should get the error message

      Examples:
      |refNum       |
      |1702LCCCQV9H |

    Scenario Outline: Invalid reference number
      Given user navigates to oiuouothe page 'https://www.loveholidays.com/manage/login.html'
      When user enters the reference number '<refNum>'
      And the user enters 'Test' in the surname
      And the user clicks on sign in
      Then the error message should be displayed

      Examples:
        |refNum       |
        |LVE1702LCCCQV9H |
