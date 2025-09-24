import { Feastify } from "@/components/Feastify";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title and meta description for SEO
    document.title = "Feastify - Recipe Finder | Discover Amazing Recipes";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Find delicious recipes based on ingredients you have. Search by cuisine, dietary preferences, and cooking time. Your culinary adventure starts with Feastify.');
    }
  }, []);

  return <Feastify />;
};

export default Index;
