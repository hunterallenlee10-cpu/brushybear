import { isSet, type Fillable } from "@/lib/placeholders";

/**
 * Shows a business fact, or a striped "[PHONE]" badge while it's still a
 * placeholder. The launch check blocks a public build that would show one.
 */
export function Fill({ value }: { value: Fillable<string | number> }) {
  if (isSet(value)) return <>{value}</>;
  return (
    <span className="placeholder-mark" title="Placeholder: not filled in yet">
      [{value.placeholder}]
    </span>
  );
}
