export interface Category {
    name: string;
  }
  
  export interface Article {
    categories: Category; 
    keywords: string; 
    title: string; 
    content: string; 
    likes: number; 
    short_description: string; 
    published_date: string; 
    is_approved: boolean; 
    status: string;
    author: number; 
    reporter: number; 
  }
  
