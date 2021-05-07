/**
 * 图
 * 图由边的集合及顶点的集合组成。
 * 地图，就是一种图，上面的每个城镇可以看作一个顶点，连接城镇的道路便是边。
 *
 */

/**
 * @name Vertex
 * @param {any} label 顶点值
 * @param {boolean} wasVisited 是否被访问过
 * 顶点类：用于保存顶点和边
 */
function Vertex(label) {
  this.label = label;
}
/**
 * @name Graph
 * @property {number} vertices 顶点数
 * @property {number} edges 边数（两个顶点组成一个边）
 * @property {Array} adj 图实现底层结构-集合数组
 * @function addEdge 新增一条边
 * @function showGraph 显示图
 */
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = new Set(); // 使用集合优化图结构，不会出现重复边
  }
}
/**
 * @name addEdge
 * @param {number} v 一侧顶点
 * @param {number} w 另一侧顶点
 * 新增一条边
 */
Graph.prototype.addEdge = function (v, w) {
  this.adj[v].add(w);
  this.adj[w].add(v);
  this.edges++;
};
/**
 * @name showGraph
 * 显示图
 */
Graph.prototype.showGraph = function () {
  this.adj.forEach((item, index) => {
    console.log(`${index} -> ${[...item.values()]}`);
  });
};

g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
