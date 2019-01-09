# _mongo-practice_

#### _A mongoose rest api, 01.08.2019_

#### By _**planeswalker1**_

## Description

_This repository has been created in order to showcase a programming challenge about apis, completed using express._

## challenge

Create a rest items api using mongoose. clients should be able to create new items, get all items, get a single item, update a item (based on their id), and delete a item.

The Item schema should have a required property called name with a type of string.

**Extra challenge**

* Don't insert values other than name. reject creations if they don't have a name.

**Function Description**

following rest constraints, create app.get functions for each of the c.r.u.d. commands for an items database. The callback function should respond with a item; otherwise, respond with an error message.

The first endpoint should be:

```javascript
app.get('/items', function(req, res, next) {
  Item.find({}, function (err, items) {
    if (err) {
      return next(err);
    }

    return res.json(items);
  })
 });
 ```

**Constraints**

* Organize and split your javascript instead of having it in a single file
* Use mongodb and mongoose to store the data

**Output Format**

respond with a item; otherwise, respond with an error message.

**Sample Url**

```
'/items'
```

**Sample Response**

```
'[[{"_id":"5c30767ac321d214ada1bedd","name":"banana","__v":0}]'
```

## Setup/Installation Requirements

* _Clone repository_
* _Navigate to the cloned repository_
* _open app.js with code editor of choice to see my solution_

## Known Bugs

_I don't think there are any bugs_

## Support and contact details

_If you run into any issues or have questions, ideas or concerns contact me at daniel.munozdev@gmail.com_

## Technologies Used

_JavaScript_

_Node_

_Mongodb_

_Mongoose_
