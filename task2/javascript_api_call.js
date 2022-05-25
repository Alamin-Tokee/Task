const getResponse = () => {
    var obj = {
      link: 'https://gorest.co.in/public/v1/users',
      object: {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3',
        }
      }
    }


    fetch(obj.link, obj.object)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      })
      .then(err => console.log(err));
}

getResponse();