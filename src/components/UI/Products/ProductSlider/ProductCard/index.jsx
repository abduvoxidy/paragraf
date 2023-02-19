import React from "react";
import cls from "./ProductCard.module.scss";
import Image from "next/image";
import { CompareIcon, HeartIcon } from "components/UI/Icons";
import Link from "next/link";

function ProductCard({ img }) {
  return (
    <div className={cls.card}>
      <div className={cls.cardHeader}>
        <div className={cls.badge}>20%</div>
        <div className={cls.icons}>
          <span>
            <CompareIcon />
          </span>
          <span>
            <HeartIcon />
          </span>
        </div>

        <div className={cls.img}>
          <Image
            src={`/images/main/${img}`}
            objectFit="contain"
            layout="fill"
            alt="car"
          />
        </div>
      </div>
      <div className={cls.cardBody}>
        <p className={cls.title}>Смартфоны</p>
        <p className={cls.desc}>Смартфон Apple iPhone 14 Pro 512Gb Black</p>
        <div className={cls.priceMonth}>
          <span className={cls.badgePrice}>1 000 000 сум</span>
          <p className={cls.count}>x 12 мес</p>
        </div>
        <p className={cls.linePrice}> 1 200 000 000 сум</p>
        <p className={cls.price}>120 650 000 сум</p>
      </div>
    </div>
  );
}

export default ProductCard;
