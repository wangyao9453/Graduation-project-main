// 设置当前滚动位置
var scrollPosition = 0;

// 监听滚轮事件
window.addEventListener('wheel', function(e) {

    // 判断滚轮方向
    if (e.deltaY > 0) {
        // 向下滚动，滚动位置加一
        scrollPosition++;
    } else {
        // 向上滚动，滚动位置减一
        scrollPosition--;
    }
    // 计算要滚动的距离（100vh）
    var scrollDistance = window.innerHeight * scrollPosition;

    // 滚动到指定位置
    window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
    });

    // 阻止默认滚动行为
    e.preventDefault();
});
   