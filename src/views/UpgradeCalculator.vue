<template>
  <div class="page-container">
    
    <h1>升级材料计算器</h1>
    <div  class="form-container">
        <form class="form" @submit.prevent="calculateMaterials">
            <div class="input-group">
                <label for="yellowCount">目标级别：</label>
                <input type="number" v-model="targetLevel" placeholder="目标级别" />
            </div>
            <div class="input-group">
                <label for="yellowCount">当前级别：</label>
                <input type="number" v-model="currentLevel" placeholder="当前级别" />
            </div>
            <div class="input-group">
                <label for="yellowCount">紫价格：</label>
                <input type="float" v-model="purplePrice" placeholder="紫价格" />
            </div>
            <div class="input-group">
                <label for="yellowCount">黄价格：</label>
                <input type="float" v-model="yellowPrice" placeholder="黄价格" />
            </div>
            <div class="input-group">
                <label for="yellowCount">红价格：</label>
                <input type="float" v-model="redPrice" placeholder="红价格" />
            </div>
            <button type="submit">计算</button>
        </form>
    </div>
    <div v-if="result">
      <p>结果：升级共需花费 {{ result }} 元</p>
    </div>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
// import axios from 'axios';
// 原始数据
const rawPrices = [
  [0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [2, 8, 0, 0, 0, 0],
  [3, 10, 0, 0, 0, 0],
  [4, 13, 0, 0, 0, 0],
  [5, 18, 0, 0, 0, 0],
  [6, 55, 0, 0, 0, 0],
  [7, 83, 0, 0, 0, 0],
  [8, 110, 0, 0, 0, 0],
  [9, 138, 0, 0, 0, 0],
  [10, 165, 0, 0, 0, 0],
  [11, 880, 300, 0, 0, 0],
  [12, 880, 360, 0, 0, 0],
  [13, 880, 400, 0, 0, 0],
  [14, 880, 440, 0, 0, 0],
  [15, 880, 500, 0, 0, 0],
  [16, 3000, 600, 0, 0, 0],
  [17, 3000, 720, 0, 0, 0],
  [18, 3000, 800, 0, 0, 0],
  [19, 3000, 880, 0, 0, 0],
  [20, 3000, 1000, 0, 0, 0],
  [21, 4000, 1200, 525, 0, 0],
  [22, 4000, 1440, 630, 0, 0],
  [23, 4000, 1600, 700, 0, 0],
  [24, 4000, 1760, 770, 0, 0],
  [25, 4000, 2000, 875, 0, 0],
  [26, 6000, 2400, 1125, 0, 0],
  [27, 6000, 2880, 1350, 0, 0],
  [28, 6000, 3200, 1500, 0, 0],
  [29, 6000, 3520, 1650, 0, 0],
  [30, 6000, 4000, 1875, 0, 0],
  [31, 12000, 4500, 1950, 450, 0],
  [32, 12000, 5400, 2340, 540, 0],
  [33, 12000, 6000, 2600, 600, 0],
  [34, 12000, 6600, 2860, 660, 0],
  [35, 12000, 7500, 3250, 750, 0],
  [36, 24000, 9000, 3900, 1050, 0],
  [37, 24000, 10800, 4680, 1260, 0],
  [38, 24000, 12000, 5200, 1400, 0],
  [39, 24000, 13200, 5720, 1540, 0],
  [40, 24000, 15000, 6500, 1750, 0],
  [41, 50000, 19500, 7500, 2100, 300],
  [42, 50000, 23400, 9000, 2520, 360],
  [43, 50000, 26000, 10000, 2800, 400],
  [44, 50000, 28600, 11000, 3080, 440],
  [45, 50000, 32500, 12500, 3500, 500],
  [46, 100000, 37500, 15000, 3900, 1200],
  [47, 100000, 45000, 18000, 4680, 1440],
  [48, 100000, 50000, 20000, 5200, 1600],
  [49, 100000, 55000, 22000, 5720, 1760],
  [50, 100000, 62500, 25000, 6500, 2000]
];

// 用于存储累加后的价格数据
let cumulativePrices = {};

// 累加函数
rawPrices.forEach((price, index) => {
  if (index === 0) {
    cumulativePrices[price[0]] = { lv: price[1], lan: price[2], zi: price[3], huang: price[4], hong: price[5] };
  } else {
    cumulativePrices[price[0]] = {
      lv: cumulativePrices[rawPrices[index-1][0]].lv + price[1],
      lan: cumulativePrices[rawPrices[index-1][0]].lan + price[2],
      zi: cumulativePrices[rawPrices[index-1][0]].zi + price[3],
      huang: cumulativePrices[rawPrices[index-1][0]].huang + price[4],
      hong: cumulativePrices[rawPrices[index-1][0]].hong + price[5]
    };
  }
});

// 输出结果
console.log(cumulativePrices);
export default {
  data() {
    return {
      targetLevel: 20,
      currentLevel: 1,
      yellowPrice: 0,
      purplePrice: 0,
      redPrice: 0,
    //   result: null
    result: null
    
    };
  },
  methods: {
    calculateMaterials() {
        let local = calculateUpgradeCost(this.targetLevel,this.currentLevel,this.purplePrice,this.yellowPrice,this.redPrice);
        this.result = local;
    },
    
  }
};


function calculateUpgradeCost(targetLevel, currentLevel, ziPrice, huangPrice, hongPrice) {
    if (targetLevel <= currentLevel || targetLevel < 1) {
        return 0; // 目标等级不应该小于或等于当前等级
    }

    // 获取目标级别和当前级别的材料消耗

    const targetMaterials = cumulativePrices[targetLevel ]; // 数组索引从0开始
    const currentMaterials = currentLevel > 0 ? cumulativePrices[currentLevel ] : [0, 0, 0, 0, 0];
    // 我需要计算差额
    const materialDiffs = [0, 0, 0, 0, 0,0];
    materialDiffs[1] = targetMaterials.lv - currentMaterials.lv;
    materialDiffs[2] = targetMaterials.lan - currentMaterials.lan;
    materialDiffs[3] = targetMaterials.zi - currentMaterials.zi;
    materialDiffs[4] = targetMaterials.huang - currentMaterials.huang;
    materialDiffs[5] = targetMaterials.hong - currentMaterials.hong;

    // 应用公式计算
    const localResult = (materialDiffs[1] / 5 + materialDiffs[2] + materialDiffs[3] * ziPrice + materialDiffs[4] * huangPrice + materialDiffs[5] * hongPrice) / 30 * 0.285;

    return localResult;
}
</script>
<style>
/* 页面居中样式 */
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
/* 表单居中样式 */
.form-container {
  width: 100%;
  max-width: 500px;
  /* padding: 20px; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
  min-height: 50vh; /* 全屏高度，可根据需要调整 */
}

/* 表单样式 */
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 左对齐 */
  width: 100%; /* 可调整表单宽度 */
  max-width: 500px; /* 最大宽度限制 */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* 可选的阴影效果 */
  border-radius: 8px; /* 可选的边框圆角 */
  background: white; /* 背景颜色 */
}

/* 样式化标题和返回链接 */
h2, .router-link {
  margin: 0px 0;
  text-align: center; /* 居中文本 */
}
/* 输入框和按钮的样式 */
.input, button {
  width: 100%; /* 宽度填满容器 */
  margin-bottom: 10px; /* 间距，可根据需要调整 */
  padding: 10px; /* 内边距，增加输入框和按钮的大小 */
}

.input-group label, .input-group input {
  margin-right: 10px;
  width: 100%;
}
/* 按钮特定样式 */
button {
  background-color: #4CAF50; /* 按钮背景颜色 */
  color: white; /* 文字颜色 */
  border: none; /* 去掉边框 */
  border-radius: 4px; /* 边框圆角 */
  cursor: pointer; /* 鼠标样式 */
}

/* 鼠标悬浮按钮时的效果 */
button:hover {
  background-color: #45a049;
}




/* 样式化表单项 */
.input {
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* 防止宽度超过父元素 */
}

/* 改善按钮的外观 */
button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50; /* 绿色背景 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer; /* 鼠标悬浮时显示手指形状 */
  transition: background-color 0.3s ease; /* 平滑颜色过渡 */
}

/* 鼠标悬浮时按钮颜色变深 */
button:hover {
  background-color: #45a049;
}

/* 容器和表单项间距 */
.form-container {
  margin-top: 20px;
}

/* 调整标题的大小和间距 */
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>