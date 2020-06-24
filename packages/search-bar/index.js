import SearchBar from './src/search-bar'

SearchBar.install = function (Vue) {
  Vue.component(SearchBar.name, SearchBar)
}

export default SearchBar