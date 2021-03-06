var FilteredList = React.createClass({ displayName: "FilteredList",
  filterList: function (event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function (item) {
      return item.toLowerCase().search(
      event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: updatedList });
  },
  getInitialState: function () {
    return {
      initialItems: [
      "Honda",
      "Honda Accord",
      "Honda Accord EX-L",
      "Honda Accord LX",
      "Honda Accord Sport",
      "Honda Accord Hybrid",
      "Honda Accord Hybrid Base",
      "Honda Accord Hybrid EX",
      "Honda Accord Hybrid EX-L",
      "Honda Accord Hybrid Touring"],

      items: [] };

  },
  componentWillMount: function () {
    this.setState({ items: this.state.initialItems });
  },
  render: function () {
    return (
      React.createElement("div", { className: "filter-list" },
      React.createElement("form", null,
      React.createElement("fieldset", { className: "form-group" },
      React.createElement("input", { type: "text", className: "form-control form-control-lg", placeholder: "Search", onChange: this.filterList }))),


      React.createElement(List, { items: this.state.items })));


  } });


var List = React.createClass({ displayName: "List",
  render: function () {
    return (
      React.createElement("ul", { className: "list-group" },

      this.props.items.map(function (item) {
        return React.createElement("li", { className: "list-group-item", "data-category": item, key: item }, item);
      })));



  } });


React.render(React.createElement(FilteredList, null), document.getElementById('search-app'));