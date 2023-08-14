import styled from "styled-components"
export const WrapperLineTime = styled.div`
  .card {
    position: relative;
    max-width: 50rem;
  }
  @media (max-width: 1000px) {
    .card {
      max-width: 75vw;
    }
  }
`
export const WrapperItem = styled.div`
  border-top: 3px solid;
  border-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.amarillo} 0%,
    ${({ theme }) => theme.colors.amarillo} 100%
  );
  border-image-slice: 1;
  border-width: 3px;
  padding: 1rem;
  position: relative;
  font-size: ${({ theme }) => theme.fontsize.small};
  .item {
    display: flex;
    align-items: center;
    /* position:relative; */
    padding: 2rem 0;
    justify-content: space-between;
    .image-box {
        width: auto;
        img {
          width: 800px;
          height: auto;
        }
      }
    .imageModal {
      position: relative;
    }
    span {
      color: ${({ theme }) => theme.colors.azul};
    }
    img {
      border: 3px solid ${({ theme }) => theme.colors.amarillo};
      height: 150px;
      width: auto;
      border-radius: 15px;
      position: relative;
    }
    &__info {
      display: flex;
      align-items: center;
      width: 50%;
    }
  }
  //numbers
  &:nth-child(odd) .item .imageModal {
    left: 15%;
  }
  &:nth-child(even) .item .imageModal {
    right: 15%;
  }
  //odd number borders
  &:nth-child(odd) {
    border-right: 3px solid;
    padding-left: 0;
    &:before {
      left: 100%;
      margin-left: -20px;
    }
  }
  //even number borders
  &:nth-child(even) {
    border-left: 3px solid;
    padding-right: 0;
    &:before {
      right: 100%;
      margin-right: -20px;
    }
  }
  //handle first and last
  &:first-child {
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  &:last-child {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  @media (max-width: 800px) {
    .item {
      .image-box {
        width: calc(100% - 40px);
        img {
          width: 100%;
          height: auto;
        }
      }
      img {
        height: 107px;
      }
      &__info {
        width: 60%;
      }
    }
  }
  @media (max-width: 640px) {
    .item {
      &__info {
        flex-direction: column;
        align-items: baseline;
      }
      /* este div es del año de la linea de tiempo */
      div {
        margin-bottom: 1rem;
      }
    }
    //numbers
    &:nth-child(odd) .item .imageModal {
      left: auto;
    }
    &:nth-child(even) .item .imageModal {
      right: auto;
      margin-right: .5rem;
    }
  }
  @media (max-width: 500px) {
    &:nth-child(even) .item .imageModal {
      right: auto;
      margin:.5rem auto;;
    }
    .item {
      flex-direction: column;
      text-align: center;
      /* delete de la barra laterañ */
      div {
        margin: 0.5rem 0;
        :after {
          content: none;
        }
      }
      &__info {
        align-items: center;
        width: 80%;
      }
      img {
        position: static;
        margin: 0.5rem 0;
      }
    }
  }
`
export const Item__title = styled.div`
  color: ${({ theme }) => theme.colors.plomo};
  font-size: ${({ theme }) => theme.fontsize.large};
  display: flex;
  align-items: center;
  margin-right: 2rem;
  &::after {
    content: "";
    width: 3px;
    background-color: ${({ theme }) => theme.colors.amarillo};
    height: 2.5rem;
    display: block;
    margin-left: 0.5rem;
  }
`
export const ItemParrafo = styled.p`
  color: ${({ theme }) => theme.colors.azul};
  font-size: ${({ theme }) => theme.fontsize.small};
  text-align: center;
  margin-top: 4rem;
`
