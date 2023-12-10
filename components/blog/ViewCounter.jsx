"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [viewsCount, setViewsCount] = useState(0);

  useEffect(() => {
    if (noCount) return;
    const incrementViews = async () => {
      try {
        let { error } = await supabase.rpc("increment_views", {
          input_slug_text: slug,
        });

        if (error)
          console.error(
            "An error occurred while incrementing views count inside try block:",
            error
          );
      } catch (error) {
        console.error(
          "An error occurred while incrementing views count:",
          error
        );
      }
    };
    if (!noCount) incrementViews();
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from("views")
          .select("count")
          .eq("slug", slug)
          .single();

        if (error)
          console.error(
            "An error occurred while getting views count inside try block:",
            error
          );

        setViewsCount(data ? data.count : 0);
      } catch (error) {
        console.error("An error occurred while getting views count:", error);
      }
    };
    if (showCount) getViews();
  }, [slug]);

  return (
    <div>{viewsCount > 1 ? `${viewsCount} views` : `${viewsCount} view`}</div>
  );
};

export default ViewCounter;
