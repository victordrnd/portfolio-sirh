import React from 'react';
import 'antd/dist/antd.css';
import { Tree } from 'antd';

const { TreeNode, DirectoryTree } = Tree;



function ArchiFront() {
  return (
    <DirectoryTree ClassName="ml-5 mt-5" multiple defaultExpandedKeys={['0-3', '0-3-0', '0-4']}>
      <TreeNode title="src">
        <TreeNode title="app">
          <TreeNode title="core">
            <TreeNode title="services">
              <TreeNode title="category.service.ts" isLeaf />
              <TreeNode title="compressor.service.ts" isLeaf />
              <TreeNode title="customer.service.ts" isLeaf />
              <TreeNode title="jwt.service.ts" isLeaf />
              <TreeNode title="order.service.ts" isLeaf />
              <TreeNode title="params.service.ts" isLeaf />
              <TreeNode title="products.service.ts" isLeaf />
              <TreeNode title="etablissements.service.ts" isLeaf />
              <TreeNode title="review.service.ts" isLeaf />
              <TreeNode title="user.service.ts" isLeaf />

            </TreeNode>
            <TreeNode title="gards">
              <TreeNode title="auth-guard.service.ts" isLeaf />

            </TreeNode>
            <TreeNode title="interceptors">
              <TreeNode title="token.interceptor.ts" isLeaf />
            </TreeNode>
          </TreeNode>
          <TreeNode title="pages">

          </TreeNode>
          <TreeNode title="shared">
            <TreeNode title="components">
              <TreeNode title="breadcrumbs"></TreeNode>
              <TreeNode title="footer"></TreeNode>
              <TreeNode title="navigation"></TreeNode>
              <TreeNode title="not-found"></TreeNode>
            </TreeNode>
            <TreeNode title="models">

            </TreeNode>
            <TreeNode title="resolvers">
              <TreeNode title="currentUserBC.resolver.ts" isLeaf />
              <TreeNode title="orderBC.resolver.ts" isLeaf />
              <TreeNode title="etablissementBC.resolver.ts" isLeaf />

            </TreeNode>
            <TreeNode title="shared.module.ts" isLeaf />
          </TreeNode>
          <TreeNode title="app-routing.module.ts" isLeaf />
          <TreeNode title="app.component.html" isLeaf />
          <TreeNode title="app.component.scss" isLeaf />
          <TreeNode title="app.component.spec.ts" isLeaf />
          <TreeNode title="app.component.ts" isLeaf />
          <TreeNode title="app.module.ts" isLeaf />

        </TreeNode>
        <TreeNode title="assets">
          <TreeNode title="logo.svg" isLeaf />
        </TreeNode>
        <TreeNode title="environments">
          <TreeNode title="environment.prod.ts" isLeaf />
          <TreeNode title="environment.ts" isLeaf />
        </TreeNode>
        <TreeNode title="index.html" isLeaf />
        <TreeNode title="main.ts" isLeaf />
        <TreeNode title="styles.scss" isLeaf />

      </TreeNode>
      <TreeNode title="package.json" isLeaf />
      <TreeNode title="angular.json" isLeaf />
      <TreeNode title="karma.conf.js" isLeaf />


    </DirectoryTree>
  );
}

export default ArchiFront;


