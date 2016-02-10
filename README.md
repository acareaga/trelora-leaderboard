# Trelora LeaderBoard

An internal dashboard built for [Trelora](http://www.trelora.com/), a real estate company located in Denver, CO. The application displays transaction data, customer feedback, and agent rankings on office TVs. Pair Project. Private app for internal use.

[Project Outline](https://github.com/turingschool/lesson_plans/blob/master/ruby_03-professional_rails_applications/self_directed_project.md)

### Instructions

* clone the project in your terminal by running `git clone git@bitbucket.org:ratingsa/ratinganimals.git`
* start the server with `rails s` and visit `http://localhost:3000` in your preferred browser
* to run the tests, run `bundle exec rake test` in the terminal

### Areas of Focus

* consume the MyTrelora internal API
* implement a production quality user interface for office TV screens
* optimize with caching, using background workers, and AJAX requests
* complete with a partner over a period of 2 weeks

### Features
* Rails Application implemented entirely in jQuery and AJAX
* Views cycle every 30 seconds
* Dynamic background that transitions with the weather
* Designed with Trelora branding using Semantic UI
* Behavior Driven Development using Rspec, Selenium, and Capybara
* Performance measured using New Relic

![normal](images/normal.gif)
![cloudy](images/clouds.gif)
![rain](images/rain.gif)
![snow](images/snow.gif)
