# Week 6 (One on One):

## Problem 1

Please extract the models that are implied in this user interface design:

![UI to extract models from](https://s3.amazonaws.com/f.cl.ly/items/0b042J3L263r171q1T3B/more-card-ui.png?v=f79ba4e2)

Please draw out the implied models for the design on the white board. __Here is a very important question:__ "What exactly is followers?". It's a `has_and_belongs_to_many` self-referential relationship - if you're wondering how you'd implement this in rails, [here is a stack overflow answer](http://stackoverflow.com/questions/24344306/has-and-belongs-to-many-self-join-only-associates-one-way).

----

## Problem 2

Now we're going to implement the details that are inherent in this design. Let's get started:

- [ ] Please create a rails app
- [ ] Now create each of the models you talked about
- [ ] Please structure the HTML and put it into the appropriate file (if it doesnt exist, please generate the appropriate files)
- [ ] Please run these seeds:
```ruby
u = User.create(name: 'Bif Grady', bio: 'Test', picture: 'https://www.placecage.com/c/400/400')
Comment.create(body: 'Test', user: u)
Comment.create(body: 'Test', user: u)
Comment.create(body: 'Test', user: u)
Comment.create(body: 'Test', user: u)
Comment.create(body: 'Test', user: u)
Comment.create(body: 'Test', user: u)
Comment.create(body: 'Test', user: u)
Comment.create(body: 'Test', user: u)
Comment.create(body: 'Test', user: u)
Comment.create(body: 'Test', user: u)

u2 = User.create(name: 'Dr. Emmett Brown', bio: 'I once wrote a book about science fiction.', picture: 'http://vignette2.wikia.nocookie.net/epicrapbattlesofhistory/images/b/b5/Doc_Brown_Based_On.png/revision/latest?cb=20150823032635')
Comment.create(body: 'Test2', user: u2)
Comment.create(body: 'Test2', user: u2)
Comment.create(body: 'Test2', user: u2)
Comment.create(body: 'Test2', user: u2)
Comment.create(body: 'Test2', user: u2)
Comment.create(body: 'Test2', user: u2)
Comment.create(body: 'Test2', user: u2)
Comment.create(body: 'Test2', user: u2)
Comment.create(body: 'Test2', user: u2)
Comment.create(body: 'Test2', user: u2)

u3 = User.create(name: 'Random Person', bio: 'I like turtles', picture: 'http://fillmurray.com/200/300')
u4 = User.create(name: 'Random Person', bio: 'I like turtles', picture: 'http://fillmurray.com/g/200/300')
u5 = User.create(name: 'Random Person', bio: 'I like turtles', picture: 'http://fillmurray.com/g/300/300')
u.followers << u3
u.followers << u4
u.followers << u5
u6 = User.create(name: 'Random Person', bio: 'I like turtles', picture: 'http://fillmurray.com/g/150/150')
u7 = User.create(name: 'Random Person', bio: 'I like turtles', picture: 'http://fillmurray.com/g/200/200')
u8 = User.create(name: 'Random Person', bio: 'I like turtles', picture: 'http://fillmurray.com/g/300/300')
u9 = User.create(name: 'Random Person', bio: 'I like turtles', picture: 'http://fillmurray.com/g/200/200')
u2.followers << u6
u2.followers << u7
u2.followers << u8
u2.followers << u9
```
- [ ] Update the view to actually output the data in your database
- [ ] Celebrate because you're done!
