<template>
  <div class="page-container">
    <h2>计算幻仙石收益</h2>
    <div class="form-container">
      <form @submit.prevent="calculateYield">
        <div class="input-group">
          <label for="stoneCount">幻仙石数量：</label>
          <input type="number" id="stoneCount" v-model.number="stoneCount" min="0">
        </div>
        <!-- <div class="result">现金：{{ result }}</div> -->
        <div v-if="result !== null">计算结果：{{ result }}</div>
        <button type="submit">计算</button>
      </form>
    </div>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stoneCount: 0,
      result: null
    };
  },
  methods: {
    calculateYield() {
        if (this.stoneCount < 1) {
            return;
        }
      this.result = (this.stoneCount / 30 * 0.92).toFixed(2); // 保留两位小数
    }
  }
};
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
/* ... */
.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.input-group label, .input-group input {
  margin-right: 10px;
}

/* 结果显示样式 */
.result {
  margin-bottom: 10px;
}

</style>