var AutoComplete = React.createClass({
  getInitialState: function(){
    return { query: ""}
  },
  clickHandle: function(name){
    this.setState({query: name});
  },
  typeHandle: function(e){
    this.setState({query: e.target.value});
  },
  matchingNames: function(){
    var query = this.state.query;
    var matchNames = [];
    names.forEach(function(n){
      if (n.name.startsWith(query)){
        matchNames.push(n);
      }
    });
    return matchNames;
  },
  render: function (){
    return (
      <div className='container'>
        <input
          type='text'
          value={this.state.query}
          onChange={this.typeHandle}
        />
        <ul>
          {
            this.matchingNames().map(function(n){
              return <li onClick={this.clickHandle.bind(this, n.name)}>{n.name}</li>
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
});

var names = [
  { name: 'Joe'},
  { name: 'John'},
  { name: 'Jacob'},
  { name: 'Matt'},
  { name: 'Nathan'},
];

String.prototype.startsWith = function(partialStr){
  for (var i = 0; i < partialStr.length; i++) {
    if (this[i].toLowerCase() !== partialStr[i].toLowerCase()){
      return false;
    }
  }
  return true;
}

React.render(<AutoComplete/>, document.getElementById('autocomplete'))
