![](headings/4.2.png)

# Introduction

If you've ever built something on the web before, you've probably come into contact with some kind of **database**. If you've installed a copy of WordPress for instance, then you would have come into contact with an SQL database .By default, every Meteor project comes with its own database. Whenever you create a project a database is automatically created. And whenever the local server is running, so is that database - there's no set up or configuration required. Everything just works right out of the box. However, this database is not an SQL database.

# Mongo Database

Instead, it's what's known as a **Mongo database**. If you've never come across Mongo before you might be a little worried, but while Mongo databases are different from SQL databases, those differences are relatively small as far as beginners are concerned. For the moment, it's mostly important to know that Mongo uses different words to describe familiar concepts:

* SQL tables are equivalent to Mongo collections.
* SQL rows are equivalent to Mongo documents.
* SQL columns are equivalent to Mongo fields.

It can be tricky to think of familiar concepts with new words, but I'll offer plenty of reminders as we progress through this course. Rest assured that we're only going to be talking about the absolute fundamentals. You'll want to eventually learn about Mongo independently, but we'll be moving slow enough that you shouldn't have any trouble following along.