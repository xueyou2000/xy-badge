export interface ScrollNumberProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 徽标数
     * @description 要展示的徽标数
     */
    count?: number;
    /**
     * 封顶数值
     * @description 超过封顶值不滚动数字，而是最追加一个+字符
     */
    overflowCount?: number;
    /**
     * 是否显示0
     * @description count为0时是否显示
     */
    showZero?: boolean;
}

export interface ScrollNumberItemProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 当前位数
     * @description 指定当前滚动的数值在个位，十位等
     */
    digits?: number;
    /**
     * 要滚动的数值
     */
    count?: number;
}

export interface BadgeDotProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * dot文本
     */
    children?: React.ReactNode;
    /**
     * 状态颜色
     */
    status?: "success" | "processing" | "default" | "error" | "warning" | string;
}

export interface BadgeProps extends ScrollNumberProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 悬浮样式
     */
    positionStyle?: React.CSSProperties;
    /**
     * 点模式
     * @description 不展示详细数字, 值显示一个小红点
     */
    dot?: boolean;
    /**
     * 状态点偏移量
     */
    offset?: [number, number];
    /**
     * 状态点
     */
    status?: "success" | "processing" | "default" | "error" | "warning";
    /**
     * 设置状态点时的文本
     */
    text?: React.ReactNode;
    /**
     * 包裹内容
     */
    children?: React.ReactNode;
}
