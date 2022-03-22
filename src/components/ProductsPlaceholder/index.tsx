import React from 'react'
import * as S from './styles'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default function ProductsPlaceholder({ repeatCount }) {
  const howMany = Array.from(Array(repeatCount).keys())
  return (
    <>
      {howMany.map((placeholder) => (
        <S.Card key={placeholder}>
          <figure style={{ alignSelf: 'center' }}>
            <Skeleton height={120} />
          </figure>
          <strong>
            <Skeleton />
            <Skeleton />
          </strong>
          <div>
            <span>
              <Skeleton />
            </span>
            <button type="button">
              <span
                style={{
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1
                }}
              >
                <SkeletonTheme color="#997df5" highlightColor="#8a6cea">
                  <Skeleton width={100} />
                </SkeletonTheme>
              </span>
            </button>
          </div>
        </S.Card>
      ))}
    </>
  )
}
