// @flow
import React from 'react';
import cn from 'classnames';
import { Image } from '@wework-dev/plasma';
import { Initials } from 'components';
import styles from './index.scss';

type AvatarSize = 'flex' | 'nano' | 'micro' | 'tiny' | 'small' | 'medium' | 'large' | 'huge';
type Props = {|
  initials?: string,
  className?: string,
  square?: boolean,
  size?: AvatarSize,
  url: string,
|};

class Avatar extends Pure.Component<Props> {
  static defaultProps = { className: '', size: 'flex', square: false };

  render() {
    const { className, initials, size, square, url } = this.props;

    const avatarStyle = cn(styles.base, {
      [styles.initials]: initials,
      [styles.square]: square,
      [styles.flex]: size === 'flex'
      [styles.nano]: size === 'nano',
      [styles.micro]: size === 'micro',
      [styles.tiny]: size === 'tiny',
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
      [styles.large]: size === 'large',
      [styles.huge]: size === 'huge',
      [className]: className,
    });

    return (
      <div className={avatarStyle}>
        {
          {initials || size === 'nano'} ? <Initials text={initials}> : <Image
            fallback=""
            src={url}
            alt="avatar"
          />
        }
      </div>
    );
  }
}

export default Avatar;
