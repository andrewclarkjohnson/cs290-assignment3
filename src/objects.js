/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  return { type: 'Goldfish', brand: 'Pepperidge Farm', flavor: 'Cheddar', count: 2000 };//Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function logMessage (messageText, number) {
	var numExistingMessages, i;

	if (number === 0) // user sent
	{
		//console.log ("sent");
		numExistingMessages = this.sentMessages.length;
		if (numExistingMessages>5) 
		{
			numExistingMessages=5;
		}
		for (i=(numExistingMessages); i>=1; --i)
		{
			this.sentMessages[i]=this.sentMessages[i-1];
		}
		this.sentMessages[0] = messageText;
		//this.totalSent +=1;
	}
	else if (number === 1) // user received
	{
		console.log ("received");
		console.log (this.receivedMessages.length);
		numExistingMessages = this.receivedMessages.length;
		if(numExistingMessages>0) 
		{
			if (numExistingMessages>5) 
			{
				numExistingMessages=5;
			}
			for (i=(numExistingMessages); i>=1; --i)
			{
				this.receivedMessages[i]=this.receivedMessages[i-1];
				console.log(i);
			}
		}
		
		this.receivedMessages[0] = messageText;
		console.log (this.receivedMessages.length);
		//this.totalReceived +=1;
	}
};	

function getSentMessage (n) {
	return this.sentMessages[n];
};


function totalSent () {
	return this.sentMessages.length;
};


function totalReceived () {
	console.log("totalReceived");
	return this.receivedMessages.length;
};


function MessageLog(user) {
  this.user = user;
  this.sentMessages = []; // sets a new array of sent messages (does this work????)
  this.receivedMessages = [];// sets a new array of received messages (does this work????)
  this.logMessage = logMessage;
  this.getSentMessage = getSentMessage;
  this.totalSent =  totalSent;
  this.totalReceived =  totalReceived;
 
}


//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here

MessageLog.prototype.lastReceivedMessage = function() {
	if (this.receivedMessages.length > 0)
	{
		return (this.receivedMessages[0]);
	}
	else
	{
		return ("No messages received yet.");
	}
	return null; // should never get here
};

//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog ("BlackHatGuy");
console.log(myLog.user);
myLog.logMessage("foo",1);
console.log("foo finished");

myLog.logMessage("bar",1);
console.log("bar finished");
myLog.logMessage("baz",1);

console.log("baz finished");
//end your code
