/* global React */

var Headers = React.createClass({
  render: function(){
    var that = this;
    var selected = this.props.selected;
    var headerStyle = {
      fontWeight: 'bold'
    };
    return(
    <ul>
    {
      tabs.map(function(tab){
        return <li
                onClick={that.props.headerClick}
                id={tabs.indexOf(tab)}
                style={selected === tabs.indexOf(tab) ? headerStyle : null}>
                {tab.header}
                </li>;

      })
    }
    </ul>
  );
  }
});

var Articles = React.createClass({
  render: function(){
    var selected = this.props.selected;
    return(
      <div>
      {
        tabs[selected].article
      }
      </div>
    );
  }
});


var Tabs = React.createClass({
  getInitialState: function(){
    return {selected: 0};
  },
  handleHeader: function(e){
    var selected = parseInt(e.target.id);
    this.setState({selected: selected});
  },
  render: function(){
    return(
      <div>
        <Headers headerClick={this.handleHeader} selected={this.state.selected}/>
        <Articles selected={this.state.selected}/>
      </div>
    );
  }
});

var tabs = [
  { header: "cats", article: "cats are cool"},
  { header: "dogs", article: "dogs are cool"},
  { header: "birds", article: "birds are cool"},
  { header: "lizards", article: "lizards are cool"}
];

React.render(<Tabs/>, document.getElementById('tabs'));
