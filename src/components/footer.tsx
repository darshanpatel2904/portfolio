export default function Footer() {
  return (
    <footer className="flex h-16 w-full items-center justify-center border-t border-gray-200 bg-white px-4 dark:border-gray-700 dark:bg-gray-800 sm:px-6 lg:px-8">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
}
