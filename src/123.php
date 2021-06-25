<?php
function get_pagination_links($current_page, $total_pages)
{
    $links = "";
    if ($total_pages >= 1 && $current_page <= $total_pages) {
        if ($total_pages)
            $links .= "<a href=\"javascript:void(0);\" class='" . ($current_page == 1 ? 'active' : '') . "'>1</a>";
        $i = max(2, $current_page - 5);

        if ($i > 2)
            $links .= " ... ";
        for (; $i < min($current_page + 6, $total_pages); $i++) {
            $class = '';
            if ($i == $current_page) {
                $class = 'active';
            }
            $links .= "<a href=\"javascript:void(0);\" class=\"{$class}\">{$i}</a>";
        }
        if ($i != $total_pages && $total_pages > 1)
            $links .= " ... ";
        if ($total_pages != 1) {
            $links .= "<a href=\"javascript:void(0);\" class='" . ($current_page == $total_pages ? 'active' : '') . "'>{$total_pages}</a>";
        }
    }

    return $links;
}
