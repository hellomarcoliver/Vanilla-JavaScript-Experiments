var umbrella = { 
    color: "pink",
    isOpen: false,
    open: function() { 
      if (umbrella.isOpen === true) {
        return "The umbrella is already opened!";
      } else {
        umbrella.isOpen = true;
        return "Julia opens the umbrella!";
      }
     }
  };



//////////// Programming Quiz: Facebook Friends (7-5)
 var facebookProfile = {
    name: "Marc",
    friends: 100,
    messages: ["Hello", "Congrats", "Super"],
    postMessage: function(message) {
        facebookProfile.messages.push(message);
        return facebookProfile.messages;
    },
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index,1);
    },
    addFriend: function() {
        facebookProfile.friends ++;
    },
    removeFriend: function() {
        facebookProfile.friends --;
    }
};
facebookProfile.postMessage("Yo");
facebookProfile.messages.forEach(function(value, index, array) {
    console.log(array[index]);
});