Feature: Customer withdraws cash

    - As a: customer
    - I want to: withdraw cash
    - so that: I can buy a coffee

  Scenario: Account is in credit

      Given the account is in credit
      And the amount is a whole number
      When the customer requests cash
      Then returns the asked amount
      And ensures the account is debited
