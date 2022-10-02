<template>
    <div class="bg-barTop flex relative w-full top-0 left-0 py-0.5 px-4 text-sm h-12"
        style="background-color: #203662;">
        <div class="w-1/2 absolute top-5.3 left-6.5 text-left font-bold">
            <span style="color: #04aeed;font-family: 'Times New Roman',Arial, Consolas;">SMART</span>
            <span style="color: #ffffff;font-family: 'Times New Roman', Consolas;"> Group</span>
        </div>
        <div class="w-1/2 absolute top-1 right-2 text-right" style="font-family: Arial, Consolas;">
            <span style="color: #04aeed;">H</span>
            <span style="color: #ffffff;">uazhong </span>
            <span style="color: #04aeed;">U</span>
            <span style="color: #ffffff;">niversity of </span>
            <span style="color: #04aeed;">S</span>
            <span style="color: #ffffff;">cience and </span>
            <span style="color: #04aeed;">T</span>
            <span style="color: #ffffff;">echnology</span>
        </div>
        <div class="w-1/2 absolute top-6 right-2 text-right">
            <span style="color: #ffffff;font-family: Arial,Consolas;">School of Artificial
                Intelligence and Automation</span>
        </div>
        <div class=" w-1/2 flex justify-end">
            <slot />
        </div>
    </div>
</template>