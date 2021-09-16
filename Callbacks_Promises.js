// Promises

const doSomeThingPromise = new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('First date');
        }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('First date');
    });
});

doSomeThingPromise
    .then(date => console.log(date))
    .catch(error => console.log(error));

// Pending
// Filled
// Rejected



/*
// Callbacks
function doSomeThing(callback) {
    setTimeout(function() {
        callback('First date');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        callback('Second date');
    }, 1000);
}

function doAll() {
    try{
    doSomeThing(function(date) {
        var processedDate = date.split('');
        
        try{
        doOtherThing(function(date2) {
            var processedDate2 = date2.split('');

            try {
            setTimeout(function() {
                console.log(processedDate, processedDate2)
            }, 1000);
            } catch(err) {
                // erro
            }
        });
        } catch (err) {
            // erro
        }
    });
    } catch(err) {
        // erro
    }
}

doAll();

*/