//= require leaderboard
//= require member_id
//= require most_recent_ratings
//= require newest_rating
//= require person_id
//= require trelora_api_key

function fetchLeaderboard() {
  $.ajax({
    type: "GET",
    url:  "http://api.mytrelora.com/ratings/leaderboard?api_key="+ treloraApiKey(),
    success: function(leaderboard) {
      $.each(leaderboard, function(index, agent) {
        renderLeaderboard(agent)
      }
    )},
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
};

function fetchMostRecentRatings() {
  $.ajax({
    type: "GET",
    url:  "http://api.mytrelora.com/ratings?api_key="+ treloraApiKey(),
    success: function(ratings) {
      $.each(ratings, function(index, rating) {
        renderMostRecentRatings(rating)
        fetchPersonId(rating)
        fetchMember(rating)
      }
    )},
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
};

function fetchNewestRating(transaction) {
  if(transaction){

    $.ajax({
      type: "GET",
      url:  "http://api.mytrelora.com/transacts/"+ transaction +"/ratings?api_key="+ treloraApiKey(),
      success: function(ratings) {
        $.each(ratings, function(index, rating) {
          renderNewestRating(rating)
          renderMemberName(rating)
          fetchTransactionCode(rating)
          fetchCustomerName(rating)
          fetchPreviousRatingsForTransactionId(rating)
        }
      )},
      error: function(xhr) {
        console.log(xhr.responseText)
      }
    });
  }
};




function fetchPreviousRatingsForTransactionId(rating) {
  var transactId = rating.map(function(transaction){
    return (transaction.transact_id)
  })
  fetchRatingDataForPreviousTransactions(transactId[0])
};


function fetchRatingDataForPreviousTransactions(transactId) {
  $.ajax({
    type: "GET",
    url: "http://api.mytrelora.com/transacts/"+ transactId +"/ratings?api_key="+ treloraApiKey(),
    success: function(transact) {
      arrayOfPreviousTransactions = Object.keys(transact.ratings).reduce(function(collector, key) {
        collector.push(transact.ratings[key])
        return collector;
      }, [])
      renderPreviousRatingTransactions(arrayOfPreviousTransactions)
    }
  })
};

function fetchPreviousTransactionCustomerName(personId) {
  $.ajax({
    type: "GET",
    url: "http://api.mytrelora.com/people/" + personId + "?api_key="+ treloraApiKey(),
    success: function(customer) {
      $.each(customer, function(index, customerId) {
        var customerName = customerId.name
        renderPreviousTransactionCustomerName(customerName)
    }
  )},
  })
};

function fetchCustomerName(rating) {
  var personId = rating.map(function(customerUrl){
    return (customerUrl.person_id)
  })
  $.ajax({
    type: "GET",
    url: "http://api.mytrelora.com/people/" + personId + "?api_key="+ treloraApiKey(),
    success: function(customer) {
      $.each(customer, function(index, customerId) {
        var customerName = customerId.name
        renderCustomerName(customerName)
    }
  )},
  })
};

function fetchTransactionCode(rating) {
  var transactId = rating.map(function(transactUrl){
    return (transactUrl.transact_id)
  })
  $.ajax({
    type: "GET",
    url: "http://api.mytrelora.com/transacts/" + transactId + "?api_key="+ treloraApiKey(),
    success: function(transaction) {
      $.each(transaction, function(index, transaction_id) {
        var code = transaction_id.code
        renderTransactionCode(code)
    }
  )},
  })
};

function fetchMemberToPage(memberPicture){
$.ajax({
  type: "GET",
  url: "http://api.mytrelora.com/members/"+ memberPicture +"?api_key="+ treloraApiKey(),
  success:function(memberPhoto){
   var photograph =  memberPhoto.member.avatar.avatar.url
   renderPhotoToPage(photograph)
  }
  })
};

function fetchMostRecentTransactionFromRatings() {
  $.ajax({
    type: "GET",
    url:  "http://api.mytrelora.com/ratings?api_key="+ treloraApiKey(),
    success: function(data) {
      $.each(data, function(index, allRatings) {
        fetchTransactionId(allRatings)
      }
    )},
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
};

// REFACTOR SET TIMEOUT HERE

// function fetchPeople(personIdArray){
//   personIdArray.slice(0, 5).map(function(people){
//     return (
//       $.ajax({
//         type: "GET",
//         url: "http://api.mytrelora.com/people/"+ people +"?api_key="+ treloraApiKey(),
//         success:function(people){
//         arrayOfCustomers = Object.keys(people.person.name).reduce(function(collector, key) {
//           collector.push(people.person.name[key].join(""))
//           return collector;
//         }, [])
//         console.log(arrayOfCustomers)
//         renderNames(arrayOfCustomers)
//       }
//       })
//     )
//   });
// };

function fetchMember(collectionOfMemberIds){
  var memberCollection = []
  collectionOfMemberIds.slice(0,5).map(function(member){
    memberCollection.push(fetchMemberPhoto(member))
  });
  renderMemberPhotos(memberCollection);
};

function fetchMemberPhoto(member){
  if (member) {
    $.ajax({
      async: false,
      type: "GET",
      url: "http://api.mytrelora.com/members/"+ member.member_ids[0] +"?api_key="+ treloraApiKey(),
      success:function(member){
        var agent = member.member.avatar.avatar.url
        succeed = agent
      }
    })
    return succeed
  }
};

function fetchPeople(personIdArray){
  var nameCollection = []
  personIdArray.slice(0, 5).map(function(people){
    nameCollection.push(fetchCustomerNames(people))
  });
  renderNames(nameCollection);
};

function fetchCustomerNames(people) {
  if (people) {
    $.ajax({
      async: false,
      type: "GET",
      url: "http://api.mytrelora.com/people/"+ people +"?api_key="+ treloraApiKey(),
      success:function(people){
        var customer = people.person.name
        succeed = customer
       }
    })
    return succeed
  }
};

function fetchRatingDataForPreviousTransactions(transactId) {
  $.ajax({
    type: "GET",
    url: "http://api.mytrelora.com/transacts/"+ transactId +"/ratings?api_key="+ treloraApiKey(),
    success: function(transact) {
      arrayOfPreviousTransactions = Object.keys(transact.ratings).reduce(function(collector, key) {
        collector.push(transact.ratings[key])
        return collector;
      }, [])
      renderPreviousRatingTransactions(arrayOfPreviousTransactions)
    }
  })
};

// memberCollection is initally in the right order
// memberCollection is then sorted in reverse oreder but not numerically
// THEN it it sorted by member ID lowest to highest or highest to lowest
// WHEN it gets appeneded it comes out - 2 2 4 6 8 12 * just an example
// Prior to the jQuery appending event, the array gets sorted
// Convert to Object instead?

// { members: [array we need first],
//             [array we need second]}
//
// Object.getBy
