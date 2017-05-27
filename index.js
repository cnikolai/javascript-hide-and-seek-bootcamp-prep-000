function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')
  var firstList = rankedLists[0]
  var secondList = rankedLists[1]

  var children = firstList.children
  for (var i = 0, l = children.length; i < l; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML)+n
  }

  children = secondList.children
  for (var i = 0, l = children.length; i < l; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML)+n
  }
}

function deepestChild() {
  var elements = document.querySelector('#grand-node div div div div')
  return elements
}
