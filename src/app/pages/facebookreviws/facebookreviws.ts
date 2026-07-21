import { Component } from '@angular/core';

export interface Review {
  id: number;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
  url: string;
}

@Component({
  selector: 'app-facebook-reviews',
  standalone: false,
  templateUrl: './facebookreviws.html',
  styleUrl: './facebookreviws.css',
})
export class FacebookReviews {
  /**
   * رابط الصفحة الرئيسية لرحلة تورز على فيسبوك
   */
  pageUrl = 'https://www.facebook.com/100064835522089';

  get reviewsPageUrl(): string {
    return `${this.pageUrl.replace(/\/$/, '')}/reviews/`;
  }

  /**
   * قائمة التقييمات العالية الجودة المصممة داخلياً
   */
  reviewsList: Review[] = [
    {
      id: 1,
      author: 'Mstafa Mhmod',
      avatar: 'https://ui-avatars.com/api/?name=Mstafa+Mhmod&background=2356B7&color=fff', // أو صورة شخصية حقيقية
      date: 'منذ يومين',
      rating: 5,
      comment: 'تجربة ممتازة جداً مع رحلة تورز، تنظيم الرحلة كان على أعلى مستوى واهتمام رائع بالتفاصيل وراحة المسافرين.',
      url: 'https://www.facebook.com/MstafaMhmoud8/posts/pfbid0SWWZM7YQy9UMtRW7NRUcse7TLwfp9HPj5ksW1ysa2evGxRa4KnPdm8FCzp3MMW7cl'
    },
    {
      id: 2,
      author: 'Ahmed Hassan',
      avatar: 'https://ui-avatars.com/api/?name=Ahmed+Hassan&background=132E8D&color=fff',
      date: 'منذ أسبوع',
      rating: 5,
      comment: 'خدمة الفنادق والانتقالات كانت ممتازة جداً، شكراً لفريق العمل على المتابعة المستمرة طوال مدة الرحلة.',
      url: 'https://www.facebook.com/100064835522089'
    }
  ];
}
