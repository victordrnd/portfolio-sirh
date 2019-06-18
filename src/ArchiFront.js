import React from 'react';
import 'antd/dist/antd.css';
import { Tree } from 'antd';

const { TreeNode, DirectoryTree } = Tree;



function ArchiFront() {
  return (
    <DirectoryTree ClassName="ml-5 mt-5" multiple defaultExpandedKeys={['0-3', '0-3-0', '0-4']}>
      <TreeNode title="css">
        <TreeNode title="style.css" isLeaf/>
      </TreeNode>

      <TreeNode title="fonts">
        <TreeNode title="roboto.css" isLeaf/>
      </TreeNode>

      <TreeNode title="img">
        <TreeNode title="..." isLeaf/>
      </TreeNode>


      <TreeNode title="js">
        <TreeNode title="controllers">
          <TreeNode title="mission">
            <TreeNode title="MissionGeneralCtrl.js" isLeaf />
            <TreeNode title="MissionListCtrl.js" isLeaf />
            <TreeNode title="MissionStatsCtrl.js" isLeaf />
            <TreeNode title="..." isLeaf />
          </TreeNode>
          <TreeNode title="projets">
            <TreeNode title="ProjetCtrl.js" isLeaf />
            <TreeNode title="ProjetPlanningCtrl.js" isLeaf />
            <TreeNode title="ProjetRapportCtrl.js" isLeaf />
            <TreeNode title="ProjetSyntheseCtrl.js" isLeaf />
            <TreeNode title="..." isLeaf />
          </TreeNode>
          <TreeNode title="qhse">
            <TreeNode title="revueSecurite">
              <TreeNode title="RevueSecuCtrl.js" isLeaf />
            </TreeNode>
            <TreeNode title="QhseListMissionCtrl.js" isLeaf />
            <TreeNode title="QhseListPdpCtrl.js" isLeaf />
            <TreeNode title="QhseFicheMissionCtrl.js" isLeaf />
            <TreeNode title="..." isLeaf />
          </TreeNode>
          <TreeNode title="..." />
        </TreeNode>
        <TreeNode title="app.js"  isLeaf />
      </TreeNode>

      <TreeNode title="pages">
        <TreeNode title="mission">
          <TreeNode title="commandes.html" isLeaf />
          <TreeNode title="index.html" isLeaf />
          <TreeNode title="list.html" isLeaf />
          <TreeNode title="..." isLeaf />
        </TreeNode>
        <TreeNode title="projets">
          <TreeNode title="index.html" isLeaf />
          <TreeNode title="missions.html" isLeaf />
          <TreeNode title="ProjetRapportCtrl.js" isLeaf />
          <TreeNode title="factures.html" isLeaf />
          <TreeNode title="..." isLeaf />
        </TreeNode>
        <TreeNode title="qhse">
          <TreeNode title="revues-securite">
            <TreeNode title="rs-details.html" isLeaf />
          </TreeNode>
          <TreeNode title="index.html" isLeaf />
          <TreeNode title="QhseListPdpCtrl.js" isLeaf />
          <TreeNode title="QhseFicheMissionCtrl.js" isLeaf />
          <TreeNode title="..." isLeaf />
        </TreeNode>
      </TreeNode>

      <TreeNode title="gulpfile.js"  isLeaf />
      <TreeNode title="index.html" isLeaf />
    </DirectoryTree>
  );
}

export default ArchiFront;


