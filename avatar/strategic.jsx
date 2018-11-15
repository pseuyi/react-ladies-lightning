// @flow
import React from 'react';
import cn from 'classnames';
import { Image } from '@wework-dev/plasma';
import { Initials } from 'components';
import styles from './index.scss';

// use inherit for experimental designs
type AvatarSize = 'inherit' | 'small' | 'medium' | 'large';
type Props = {|
  initials?: string,
  square?: boolean,
  size?: AvatarSize,
  url: string,
|};

class Avatar extends Pure.Component<Props> {
  static defaultProps = { size: 'inherit', square: false };

  render() {
    const { initials, size, square, url } = this.props;

    const avatarStyle = cn(styles.base, {
      [styles.initials]: initials,
      [styles.square]: square,
      [styles.inherit]: size === 'inherit'
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
      [styles.large]: size === 'large',
    });

    return (
      <div className={avatarStyle}>
        {
          initials ? <Initials text={initials}> : <Image
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
