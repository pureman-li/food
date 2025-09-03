// 食材数据 - 你可以在这里修改食材种类
const ingredients = [
    { id: 1, name: '面粉', image: '面粉.png', category: 'starch' },
    { id: 2, name: '油', image: '油.png', category: 'seasoning' },
    { id: 3, name: '水', image: '饮用水.png', category: 'liquid' },
    { id: 4, name: '盐', image: '盐.png', category: 'seasoning' },
    { id: 5, name: '鸡蛋', image: '鸡蛋.png', category: 'protein' },
    { id: 6, name: '荠菜', image: '荠菜.png', category: 'vegetable' },
    { id: 7, name: '枣泥馅', image: '枣泥馅.png', category: 'filling' },
    { id: 8, name: '黑芝麻馅', image: '黑芝麻馅.png', category: 'filling' },
    { id: 9, name: '葱', image: '葱.png', category: 'vegetable' },
    { id: 10, name: '豆腐', image: '豆腐.png', category: 'protein' },
    { id: 11, name: '糯米粉', image: '糯米粉.png', category: 'starch' },
    { id: 12, name: '笋', image: '笋.png', category: 'vegetable' },
    { id: 13, name: '火腿', image: '火腿肠.png', category: 'protein' },
    { id: 14, name: '猪肉', image: '猪肉.png', category: 'protein' },
    { id: 15, name: '辣椒', image: '辣椒.png', category: 'seasoning' },
    { id: 16, name: '面条', image: '面条.png', category: 'starch' },
    { id: 17, name: '烤炉', image: '烤炉.png', category: 'tool' },
    { id: 18, name: '刀', image: '刀.png', category: 'tool' },
    { id: 19, name: '面皮', image: '面皮.png', category: 'starch' },
    { id: 20, name: '肉馅', image: '肉馅.png', category: 'protein' }
];

// 菜品配方数据
const recipes = [
    {
        name: '枣花酥',
        ingredients: ['面粉', '油', '枣泥馅'],
        description: '枣花酥是北京传统小吃“八大件”糕点之一，承载着历史记忆和美好祝福。（详见本书6-7页）',
        image: '枣花酥.png'
    },
    {
        name: '荠菜炒鸡蛋',
        ingredients: ['鸡蛋', '荠菜', '盐'],
        description: '荠菜又叫“春菜”，春季食用荠菜炒鸡蛋有祈求平安吉祥、家宅兴旺的寓意。（详见本书10-12页）',
        image: '荠菜炒鸡蛋.png'
    },
    {
        name: '小葱拌豆腐',
        ingredients: ['葱', '油', '豆腐'],
        description: '小葱拌豆腐做法极简，味道鲜美，兼具质朴本味与清正的寓意，是国人喜爱的家常菜之一。（详见本书15-17页）',
        image: '小葱拌豆腐.png'
    },
    {
        name: '汤圆',
        ingredients: ['面粉', '糯米粉', '黑芝麻馅'],
        description: '汤圆是我国必不可少的节庆美食之一，象征合家幸福，团圆美满。（详见本书21-23页）',
        image: '汤圆.png'
    },
    {
        name: '腌笃鲜',
        ingredients: ['笋', '火腿', '猪肉'],
        description: '属于江南地区的特色菜肴，此菜汤白汁浓，肉酥笋嫩，鲜味浓厚，是当之无愧的“舌尖风物诗”。（详见本书98-99页）',
        image: '腌笃鲜.png'
    },
    {
        name: '担担面',
        ingredients: ['面条', '辣椒', '水'],
        description: '担担面是川渝地区的特色美食，也是市井烟火气的象征。（详见本书64-66页）',
        image: '担担面.png'
    },
    {
        name: '烤肉',
        ingredients: ['烤炉', '油', '猪肉'],
        description: '烤肉讲究“自烤自食”，鲜肉在炭火的炙烤下散发出别样的风味，是亲友相聚、邻里往来中不可或缺的“饮食社交”。（详见本书45-47页）',
        image: '烤肉.png'
    },
    {
        name: '文思豆腐',
        ingredients: ['豆腐', '水', '刀'],
        description: '文思豆腐展现了中式烹饪“食不厌精，脍不厌细”的追求，是一道经典的淮扬菜。（详见本书50-52页）',
        image: '文思豆腐.png'
    },
    {
        name: '肉燕',
        ingredients: ['面皮', '肉馅', '水'],
        description: '肉燕是福州地区节庆宴客、婚丧嫁娶等重要场合的必备菜肴，它形似飞燕，寓意“平安吉祥”。（详见本书57-59页）',
        image: '肉燕.png'
    }
];

// 全局变量
let addedIngredients = [];
let isDragging = false;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeIngredients();
    initializeDragAndDrop();
});

// 初始化食材展示
function initializeIngredients() {
    const ingredientsGrid = document.getElementById('ingredientsGrid');
    
    ingredients.forEach(ingredient => {
        const ingredientElement = document.createElement('div');
        ingredientElement.className = 'ingredient-item';
        ingredientElement.draggable = true;
        ingredientElement.dataset.ingredientId = ingredient.id;
        ingredientElement.dataset.ingredientName = ingredient.name;
        
        ingredientElement.innerHTML = `
            <img src="${ingredient.image}" alt="${ingredient.name}" onerror="this.style.display='none'">
            <span>${ingredient.name}</span>
        `;
        
        ingredientsGrid.appendChild(ingredientElement);
    });
}

// 初始化拖拽功能
function initializeDragAndDrop() {
    const cookingArea = document.getElementById('cookingArea');
    
    // 为每个食材添加拖拽事件
    document.querySelectorAll('.ingredient-item').forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });
    
    // 为制作区添加拖拽事件
    cookingArea.addEventListener('dragover', handleDragOver);
    cookingArea.addEventListener('dragenter', handleDragEnter);
    cookingArea.addEventListener('dragleave', handleDragLeave);
    cookingArea.addEventListener('drop', handleDrop);
}

// 拖拽开始
function handleDragStart(e) {
    isDragging = true;
    // 找到最近的食材元素，而不是拖拽的目标元素
    const ingredientElement = e.target.closest('.ingredient-item');
    if (ingredientElement) {
        ingredientElement.classList.add('dragging');
        e.dataTransfer.setData('text/plain', ingredientElement.dataset.ingredientName);
        e.dataTransfer.effectAllowed = 'copy';
    }
}

// 拖拽结束
function handleDragEnd(e) {
    isDragging = false;
    // 找到最近的食材元素，而不是拖拽的目标元素
    const ingredientElement = e.target.closest('.ingredient-item');
    if (ingredientElement) {
        ingredientElement.classList.remove('dragging');
    }
}

// 拖拽悬停
function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
}

// 拖拽进入
function handleDragEnter(e) {
    e.preventDefault();
    e.target.closest('.cooking-area').classList.add('drag-over');
}

// 拖拽离开
function handleDragLeave(e) {
    if (!e.target.closest('.cooking-area')) {
        e.target.closest('.cooking-area').classList.remove('drag-over');
    }
}

// 拖拽放置
function handleDrop(e) {
    e.preventDefault();
    const cookingArea = e.target.closest('.cooking-area');
    cookingArea.classList.remove('drag-over');
    
    const ingredientName = e.dataTransfer.getData('text/plain');
    
    if (ingredientName && !addedIngredients.includes(ingredientName)) {
        addIngredient(ingredientName);
        checkRecipe();
    }
}

// 添加食材到制作区
function addIngredient(ingredientName) {
    addedIngredients.push(ingredientName);
    updateAddedIngredientsDisplay();
    
    // 隐藏占位符
    const placeholder = document.querySelector('.cooking-placeholder');
    if (placeholder) {
        placeholder.style.display = 'none';
    }
    
    // 显示已添加的食材
    const cookingArea = document.getElementById('cookingArea');
    const ingredientElement = document.createElement('div');
    ingredientElement.className = 'added-ingredient';
    ingredientElement.dataset.ingredientName = ingredientName;
    
    // 查找食材对象以获取图片
    const ingredient = ingredients.find(i => i.name === ingredientName);
    console.log('拖入的食材名称:', ingredientName);
    console.log('查找到的食材对象:', ingredient);
    console.log('所有食材:', ingredients);
    
    if (ingredient) {
        ingredientElement.innerHTML = `
            <img src="${ingredient.image}" alt="${ingredient.name}" onerror="this.style.display='none'">
            <span>${ingredientName}</span>
            <button class="remove-ingredient" onclick="removeIngredient('${ingredientName}')">×</button>
        `;
    } else {
        ingredientElement.innerHTML = `
            <span>${ingredientName}</span>
            <button class="remove-ingredient" onclick="removeIngredient('${ingredientName}')">×</button>
        `;
    }
    cookingArea.appendChild(ingredientElement);
}

// 更新已添加食材的显示
function updateAddedIngredientsDisplay() {
    const addedIngredientsList = document.getElementById('addedIngredientsList');
    addedIngredientsList.innerHTML = '';
    
    addedIngredients.forEach(ingredientName => {
        const ingredient = ingredients.find(i => i.name === ingredientName);
        if (ingredient) {
            const ingredientElement = document.createElement('div');
            ingredientElement.className = 'added-ingredient';
            ingredientElement.innerHTML = `
                <img src="${ingredient.image}" alt="${ingredient.name}" onerror="this.style.display='none'">
                <span>${ingredient.name}</span>
            `;
            addedIngredientsList.appendChild(ingredientElement);
        }
    });
}

// 检查是否有匹配的菜品配方
function checkRecipe() {
    const matchedRecipe = recipes.find(recipe => {
        return recipe.ingredients.every(ingredient => 
            addedIngredients.includes(ingredient)
        ) && recipe.ingredients.length === addedIngredients.length;
    });
    
    if (matchedRecipe) {
        showDishResult(matchedRecipe);
    } else if (addedIngredients.length === 3) {
        // 如果已添加3个食材但没有匹配的配方，显示失败提示
        showFailureHint();
    }
}

// 显示菜品结果
function showDishResult(recipe) {
    const dishResult = document.getElementById('dishResult');
    const failureHint = document.getElementById('failureHint');
    const dishImage = document.getElementById('dishImage');
    const dishName = document.getElementById('dishName');
    const dishDescription = document.getElementById('dishDescription');
    
    // 隐藏失败提示
    failureHint.style.display = 'none';
    
    dishImage.innerHTML = `<img src="${recipe.image}" alt="${recipe.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">`;
    dishName.textContent = recipe.name;
    dishDescription.textContent = recipe.description;
    
    dishResult.style.display = 'block';
    
    // 添加成功动画
    dishResult.style.animation = 'fadeInUp 0.6s ease-out';
}

// 显示失败提示
function showFailureHint() {
    const failureHint = document.getElementById('failureHint');
    const dishResult = document.getElementById('dishResult');
    
    // 隐藏成功结果
    dishResult.style.display = 'none';
    
    // 显示失败提示
    failureHint.style.display = 'block';
    
    // 重新触发动画
    failureHint.style.animation = 'none';
    setTimeout(() => {
        failureHint.style.animation = 'shake 0.5s ease-in-out';
    }, 10);
}

// 移除单个食材
function removeIngredient(ingredientName) {
    // 从数组中移除食材
    const index = addedIngredients.indexOf(ingredientName);
    if (index > -1) {
        addedIngredients.splice(index, 1);
    }
    
    // 更新显示
    updateAddedIngredientsDisplay();
    
    // 从制作区移除对应的食材元素
    const cookingArea = document.getElementById('cookingArea');
    const ingredientElements = cookingArea.querySelectorAll('.added-ingredient');
    ingredientElements.forEach(element => {
        if (element.dataset.ingredientName === ingredientName) {
            element.remove();
        }
    });
    
    // 如果没有食材了，显示占位符
    if (addedIngredients.length === 0) {
        const placeholder = document.querySelector('.cooking-placeholder');
        if (placeholder) {
            placeholder.style.display = 'block';
        }
    }
    
    // 重新检查配方
    checkRecipe();
}

// 清空制作区
function clearCookingArea() {
    addedIngredients = [];
    
    // 清空制作区
    const cookingArea = document.getElementById('cookingArea');
    cookingArea.innerHTML = `
        <div class="cooking-placeholder">
            <p>拖拽食材到这里开始制作</p>
            <p class="hint">提示：某些食材组合可以制作出特殊菜品</p>
        </div>
    `;
    
    // 清空已添加食材列表
    const addedIngredientsList = document.getElementById('addedIngredientsList');
    addedIngredientsList.innerHTML = '';
    
    // 隐藏菜品结果和失败提示
    const dishResult = document.getElementById('dishResult');
    const failureHint = document.getElementById('failureHint');
    dishResult.style.display = 'none';
    failureHint.style.display = 'none';
    
    // 重新初始化拖拽功能
    initializeDragAndDrop();
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
