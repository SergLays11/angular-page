import {ArrayDataSource} from '@angular/cdk/collections';
import { Component } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-table-tree',
  templateUrl: './table-tree.component.html',
  styleUrls: ['./table-tree.component.css']
})
export class TableTreeComponent {
  treeControl = new NestedTreeControl<FoodNode> (node => node.children);
  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
