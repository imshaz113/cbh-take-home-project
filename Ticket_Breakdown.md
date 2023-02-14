# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## ticket #1 Generate custom id for agent:

### write function that generate unique id for agent

**Estimated time** 1 hr

custom id generate must be alphaunmeric with 8 characters in lenth
append A- with the generated id to identitfy id is for agent, like A-1p32oPtq

### Acceptance criteria

A function that return alalhanumeric id with 8 characters prepended by A-
function should always return new key every time it is called

## Ticket #2 Generate custom id for agent with count/length:

**update function that accept count to generate key**

**Estimated time** 1 hr

considering above function that was genrting 8 character length key, keeping functionality same let the function accept count to generate key

### Acceptance criteria

Function should accept number arguments to generate key
proper response should be return if count is invalid or not provided
funtion return key count equel to the count provided

## Ticket #3 associate custom key with agent:

**write a function that associate custom key with the agent**

**Estimated time** 2 hr

for each faciltiy that work with agent, link custom key with each agent so it can be used for referencing specific record.

### Acceptance criteria

a custom key is linked to agent record.

## Ticket #4 Report generation:

**write a function that accept custom user key and return generated report in PDF**

**Estimated time** 3 hr

### Acceptance criteria

Function should accept key to generate report for spcific agent

should return pdf file with the reports for specific agent.
