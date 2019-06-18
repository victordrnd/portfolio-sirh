import React from 'react';
import 'antd/dist/antd.css';
import { Tree } from 'antd';

const { TreeNode, DirectoryTree } = Tree;



function ArchiStage() {
  return (
    <DirectoryTree ClassName="ml-5 mt-5" multiple defaultExpandedKeys={['0-0', '0-1', '0-2', '0-0-1']}>
      <TreeNode title="app" key="0-0">
        <TreeNode title="Exceptions" key="0-0-0">
          <TreeNode title="Handler.php" key="0-0-0-1" isLeaf />
        </TreeNode>

        <TreeNode title="Http" key="0-0-1" >
          <TreeNode title="Controllers" key="0-0-1-0">
            <TreeNode title="AnalyseRisqueController.php" key="0-0-1-0-0" isLeaf />
            <TreeNode title="ExcelController.php" key="0-0-1-0-1" isLeaf />
            <TreeNode title="OrdreDeMissionController.php" key="0-0-1-0-2" isLeaf />
            <TreeNode title="ProjetController.php" key="0-0-1-0-3" isLeaf />
            <TreeNode title="RevueSecuriteController.php" key="0-0-1-0-4" isLeaf />
            <TreeNode title="QuestionHSEController.php" key="0-0-1-0-5" isLeaf />
            <TreeNode title="StatusController.php" key="0-0-1-0-6" isLeaf />
          </TreeNode>

          <TreeNode title="Middleware" key="0-0-1-1" >
            <TreeNode title="JWTAuth.php" key="0-0-1-1-0" isLeaf />
          </TreeNode>
        </TreeNode>
        <TreeNode title="Models" key="0-0-2" >
          <TreeNode title="AnalyseRisque.php" key="0-0-2-0" isLeaf />
          <TreeNode title="OrdreDeMission.php" key="0-0-2-1" isLeaf />
          <TreeNode title="Projet.php" key="0-0-2-2" isLeaf />
          <TreeNode title="QuestionHSE.php" key="0-0-2-3" isLeaf />
          <TreeNode title="RevueSecurite.php" key="0-0-2-4" isLeaf />
          <TreeNode title="Status.php" key="0-0-2-5" isLeaf />
        </TreeNode>
      </TreeNode>


      <TreeNode title="database" key="0-1">
        <TreeNode title="migrations" key="0-1-0">

        </TreeNode>
        <TreeNode title="seeds" key="0-1-1">

        </TreeNode>
      </TreeNode>


      <TreeNode title="routes" key="0-2">
        <TreeNode title="api.php" key="0-2-0" isLeaf />
        <TreeNode title="web.php" key="0-2-1" isLeaf />
      </TreeNode>
    </DirectoryTree>
  );
}

export default ArchiStage;


