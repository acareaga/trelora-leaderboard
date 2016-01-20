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
        fetchMemberId(rating)
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


// REFACTOR SET TIMEOUT HERE

var memberCollection = []

function fetchMemberPhoto(collectionOfMemberIds){
  collectionOfMemberIds.map(function(member){
    return (
      $.ajax({
        type: "GET",
        url: "http://api.mytrelora.com/members/"+ member +"?api_key="+ treloraApiKey(),
        success:function(member){
          $.each(member, function (index, member) {
            memberCollection.push(member)
          })
        }
      })
    )
  })
  setTimeout(function(){renderMemberPhotos(memberCollection)}, 1000);
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

// function fetchPeople(personIdArray){
//   personIdArray.slice(0, 5).map(function(people){
//     return (
//       $.ajax({
//         type: "GET",
//         url: "http://api.mytrelora.com/people/"+ people +"?api_key="+ treloraApiKey(),
//         success:function(people){
//         arrayOfCustomers = Object.keys(people.person.name).reduce(function(collector, key) {
//           collector.push(people.person.name)
//           return collector;
//         }, [])
//         console.log(arrayOfCustomers)
//         renderNames(arrayOfCustomers)
//       }
//       })
//     )
//   });
// };

function fetchPeople(personIdArray){
  personIdArray.map(function(people){
    return (
      $.ajax({
        type: "GET",
        url: "http://api.mytrelora.com/people/"+ people +"?api_key="+ treloraApiKey(),
        success:function(people){
        $.each(people, function (index,person) {
          nameCollection.push(person)
        })
      }
      })
    )
  });
  setTimeout(function(){renderNames(nameCollection)}, 1000);
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
