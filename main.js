 // Operations: Object Access, Invocation
      console.log("What's your name?");

      // Operations:
      process.stdin.on('data', function(data) {

          // Operations:
          const name = data.toString().trim();
          
          // Operations:
          console.log(`Hello, ${name}!`);

      });