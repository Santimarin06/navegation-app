import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

interface Props extends PressableProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'contained' | 'text-only';
  className?: string;
}

const CustomButton = React.forwardRef<View, Props>(
  (
    {
      children,
      color = 'primary',
      onPress,
      onLongPress,
      variant = 'contained',
      className,
      ...pressableProps
    },
    ref
  ) => {
    const btnColor = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
    }[color];

    const textColor = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
    }[color];

    if (variant === 'text-only') {
      return (
        <Pressable
          {...pressableProps}
          className={`p-3 ${className ?? ''}`}
          onPress={onPress}
          onLongPress={onLongPress}
          ref={ref}
        >
          <Text className={`text-center ${textColor} font-work-medium`}>
            {children}
          </Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        {...pressableProps}
        className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className ?? ''}`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className="text-white text-center font-work-medium">
          {children}
        </Text>
      </Pressable>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;