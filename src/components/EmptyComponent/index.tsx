const EmptyComponent = () => {
	return (
		<div className="my-6 flex mx-auto h-[80vh]  w-[90%] md:w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-4 shadow-lg">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				width="150"
				height="150"
				viewBox="0 0 700 700"
			>
				<defs>
					<symbol id="x" overflow="visible">
						<path d="M18.766-1.125c-.969.5-1.98.875-3.031 1.125-1.043.258-2.137.39-3.281.39-3.399 0-6.09-.945-8.079-2.843-1.992-1.906-2.984-4.485-2.984-7.735 0-3.257.992-5.835 2.984-7.734 1.989-1.906 4.68-2.86 8.079-2.86 1.144 0 2.238.133 3.28.391 1.052.25 2.063.625 3.032 1.125v4.219c-.98-.656-1.945-1.14-2.89-1.453a9.532 9.532 0 00-3-.469c-1.876 0-3.352.606-4.423 1.813-1.074 1.199-1.609 2.855-1.609 4.968 0 2.106.535 3.762 1.61 4.97C9.523-4.02 11-3.423 12.874-3.423c1.051 0 2.051-.148 3-.453.946-.312 1.91-.8 2.891-1.469z"></path>
					</symbol>
					<symbol id="c" overflow="visible">
						<path d="M13.734-11.141a6.765 6.765 0 00-1.297-.438 5.346 5.346 0 00-1.265-.156c-1.262 0-2.231.406-2.907 1.219-.68.805-1.015 1.953-1.015 3.453V0H2.36v-15.312h4.89v2.515c.625-1 1.344-1.726 2.156-2.187.82-.469 1.8-.703 2.937-.703.164 0 .344.011.532.03.195.013.476.04.843.079z"></path>
					</symbol>
					<symbol id="a" overflow="visible">
						<path d="M17.641-7.703v1.406H6.188c.125 1.148.54 2.008 1.25 2.578.707.574 1.703.86 2.984.86a11.52 11.52 0 003.157-.454 16.707 16.707 0 003.328-1.39v3.765a20.629 20.629 0 01-3.47.985A18.006 18.006 0 019.97.39C7.196.39 5.04-.313 3.5-1.72 1.97-3.125 1.203-5.098 1.203-7.64c0-2.5.754-4.46 2.266-5.89 1.508-1.438 3.582-2.157 6.219-2.157 2.406 0 4.332.731 5.781 2.188 1.445 1.45 2.172 3.383 2.172 5.797zM12.61-9.328c0-.926-.274-1.672-.813-2.234-.543-.57-1.25-.86-2.125-.86-.949 0-1.719.266-2.312.797s-.965 1.297-1.11 2.297z"></path>
					</symbol>
					<symbol id="l" overflow="visible">
						<path d="M9.219-6.89c-1.024 0-1.793.171-2.313.515-.511.344-.765.855-.765 1.531 0 .625.207 1.117.625 1.469.414.344.988.516 1.718.516.926 0 1.704-.328 2.329-.985.632-.664.953-1.492.953-2.484v-.563zm7.469-1.844V0h-4.922v-2.266c-.657.93-1.399 1.606-2.22 2.032-.823.414-1.823.625-3 .625-1.585 0-2.87-.457-3.859-1.375-.992-.926-1.484-2.13-1.484-3.61 0-1.789.613-3.101 1.844-3.937 1.238-.844 3.18-1.266 5.828-1.266h2.89v-.39c0-.77-.308-1.333-.921-1.688-.617-.363-1.57-.547-2.86-.547-1.054 0-2.03.106-2.937.313-.899.21-1.73.523-2.5.937v-3.734c1.039-.25 2.086-.442 3.14-.578a25.68 25.68 0 013.188-.204c2.758 0 4.75.547 5.969 1.641 1.226 1.086 1.844 2.856 1.844 5.313z"></path>
					</symbol>
					<symbol id="b" overflow="visible">
						<path d="M7.703-19.656v4.344h5.047v3.5H7.703v6.5c0 .71.14 1.187.422 1.437s.836.375 1.672.375h2.515V0H8.125C6.187 0 4.812-.398 4-1.203c-.805-.812-1.203-2.18-1.203-4.11v-6.5H.375v-3.5h2.422v-4.343z"></path>
					</symbol>
					<symbol id="k" overflow="visible">
						<path d="M12.766-13.078v-8.203h4.922v21.28h-4.922v-2.218c-.668.906-1.406 1.57-2.219 1.985S8.79.39 7.72.39c-1.887 0-3.434-.75-4.64-2.25-1.211-1.5-1.813-3.426-1.813-5.782 0-2.363.602-4.297 1.812-5.797 1.207-1.5 2.754-2.25 4.641-2.25 1.063 0 2 .215 2.813.641.82.43 1.566 1.086 2.234 1.969zM9.547-3.156c1.04 0 1.836-.379 2.39-1.14.552-.77.829-1.883.829-3.344 0-1.457-.277-2.567-.828-3.329-.555-.77-1.352-1.156-2.39-1.156-1.044 0-1.84.387-2.391 1.156-.555.762-.829 1.872-.829 3.329 0 1.46.274 2.574.829 3.343.55.762 1.347 1.14 2.39 1.14z"></path>
					</symbol>
					<symbol id="j" overflow="visible">
						<path d="M10.5-3.156c1.05 0 1.852-.38 2.406-1.14.551-.77.828-1.884.828-3.345 0-1.457-.277-2.566-.828-3.328-.554-.77-1.355-1.156-2.406-1.156-1.055 0-1.86.387-2.422 1.156-.555.774-.828 1.883-.828 3.328 0 1.45.273 2.559.828 3.329.563.773 1.367 1.156 2.422 1.156zm-3.25-9.922c.676-.883 1.422-1.54 2.234-1.969.82-.426 1.766-.64 2.829-.64 1.894 0 3.445.75 4.656 2.25 1.207 1.5 1.812 3.433 1.812 5.796 0 2.356-.605 4.282-1.812 5.782C15.758-.36 14.207.39 12.312.39 11.25.39 10.305.18 9.484-.234 8.672-.66 7.926-1.32 7.25-2.22V0H2.36v-21.281h4.89z"></path>
					</symbol>
					<symbol id="i" overflow="visible">
						<path d="M.344-15.312h4.89L9.36-4.921l3.5-10.391h4.89L11.313 1.454c-.648 1.695-1.402 2.883-2.265 3.562-.867.688-2 1.032-3.406 1.032H2.797v-3.22h1.531c.832 0 1.438-.136 1.813-.405.382-.262.68-.73.89-1.407l.14-.421z"></path>
					</symbol>
					<symbol id="h" overflow="visible">
						<path d="M14.953-3.719H6.734L5.422 0H.14l7.563-20.406h6.266L21.53 0H16.25zM8.047-7.5h5.578l-2.781-8.125z"></path>
					</symbol>
					<symbol id="w" overflow="visible">
						<path d="M2.36-21.281h4.89V0H2.36z"></path>
					</symbol>
					<symbol id="g" overflow="visible">
						<path d="M2.36-15.312h4.89V0H2.36zm0-5.969h4.89v4H2.36z"></path>
					</symbol>
					<symbol id="f" overflow="visible">
						<path d="M14.719-14.828v3.984a7.612 7.612 0 00-2-1.015 6.629 6.629 0 00-2.078-.328c-1.367 0-2.434.402-3.203 1.203-.762.793-1.14 1.906-1.14 3.344 0 1.43.378 2.543 1.14 3.343.77.793 1.836 1.188 3.203 1.188.758 0 1.484-.11 2.172-.328a6.412 6.412 0 001.906-1.016v4c-.762.281-1.54.488-2.328.625a13.04 13.04 0 01-2.375.219C7.254.39 5.094-.316 3.53-1.734 1.977-3.148 1.203-5.117 1.203-7.64c0-2.531.774-4.504 2.328-5.922 1.563-1.414 3.723-2.125 6.485-2.125.8 0 1.594.074 2.375.219.781.136 1.555.351 2.328.64z"></path>
					</symbol>
					<symbol id="v" overflow="visible">
						<path d="M7.828-16.438v12.453h1.89c2.157 0 3.802-.531 4.938-1.594 1.133-1.062 1.703-2.613 1.703-4.656 0-2.02-.57-3.555-1.703-4.61-1.125-1.062-2.773-1.593-4.937-1.593zm-5.25-3.969h5.547c3.094 0 5.398.219 6.922.656 1.52.438 2.82 1.188 3.906 2.25a8.643 8.643 0 012.125 3.188c.469 1.2.703 2.559.703 4.078 0 1.543-.234 2.918-.703 4.125a8.732 8.732 0 01-2.125 3.203c-1.094 1.055-2.406 1.805-3.937 2.25C13.484-.219 11.187 0 8.125 0H2.578z"></path>
					</symbol>
					<symbol id="u" overflow="visible">
						<path d="M14.312-14.828v3.719a18.075 18.075 0 00-3.031-.985 12.73 12.73 0 00-2.766-.328c-.93 0-1.62.117-2.078.344-.45.23-.672.59-.672 1.078 0 .387.172.684.516.89.344.212.957.368 1.844.47l.859.125c2.508.324 4.195.851 5.063 1.578.863.73 1.296 1.87 1.296 3.422 0 1.636-.605 2.867-1.812 3.687-1.2.813-2.992 1.219-5.375 1.219C7.133.39 6.082.313 5 .156a25.26 25.26 0 01-3.313-.718v-3.72c.969.481 1.961.84 2.985 1.079 1.03.23 2.078.344 3.14.344.957 0 1.676-.13 2.156-.39.477-.27.72-.665.72-1.188 0-.438-.169-.758-.5-.97-.337-.218-.997-.382-1.985-.5l-.86-.109c-2.18-.269-3.703-.773-4.578-1.515-.875-.738-1.312-1.86-1.312-3.36 0-1.625.55-2.828 1.656-3.609 1.113-.789 2.82-1.187 5.125-1.187.895 0 1.836.074 2.828.218 1 .137 2.082.352 3.25.641z"></path>
					</symbol>
					<symbol id="t" overflow="visible">
						<path d="M12.766-2.594c-.668.887-1.406 1.543-2.219 1.969C9.735-.207 8.79 0 7.72 0 5.852 0 4.313-.734 3.094-2.203 1.875-3.68 1.266-5.555 1.266-7.828c0-2.29.61-4.164 1.828-5.625 1.219-1.469 2.758-2.203 4.625-2.203 1.07 0 2.016.215 2.828.64.813.418 1.551 1.075 2.219 1.97v-2.266h4.922v13.766c0 2.457-.777 4.336-2.328 5.64-1.555 1.301-3.809 1.953-6.766 1.953-.949 0-1.87-.074-2.765-.218a17.74 17.74 0 01-2.703-.672V1.344c.863.488 1.703.852 2.515 1.094.82.238 1.649.36 2.485.36 1.601 0 2.773-.352 3.515-1.048.75-.699 1.125-1.796 1.125-3.296zm-3.219-9.531c-1.012 0-1.805.375-2.375 1.125-.562.742-.844 1.797-.844 3.172 0 1.398.27 2.46.813 3.187.55.72 1.352 1.079 2.406 1.079 1.02 0 1.813-.368 2.375-1.11.563-.75.844-1.8.844-3.156 0-1.375-.281-2.43-.844-3.172-.562-.75-1.355-1.125-2.375-1.125z"></path>
					</symbol>
					<symbol id="e" overflow="visible">
						<path d="M17.75-9.328V0h-4.922v-7.14c0-1.32-.031-2.235-.094-2.735s-.168-.867-.312-1.11a1.994 1.994 0 00-.781-.734 2.295 2.295 0 00-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-15.311h4.89v2.234c.738-.883 1.52-1.539 2.344-1.969.832-.425 1.75-.64 2.75-.64 1.77 0 3.113.547 4.031 1.64.914 1.086 1.375 2.657 1.375 4.72z"></path>
					</symbol>
					<symbol id="s" overflow="visible">
						<path d="M12.422-21.281v3.219H9.719c-.688 0-1.172.125-1.453.375-.274.25-.406.687-.406 1.312v1.063h4.187v3.5H7.86V0H2.969v-11.812H.531v-3.5H2.97v-1.063c0-1.664.46-2.898 1.39-3.703.926-.8 2.368-1.203 4.329-1.203z"></path>
					</symbol>
					<symbol id="d" overflow="visible">
						<path d="M9.64-12.188c-1.085 0-1.914.39-2.484 1.172-.574.781-.86 1.906-.86 3.375s.286 2.594.86 3.375c.57.773 1.399 1.156 2.485 1.156 1.062 0 1.875-.383 2.437-1.156.57-.781.86-1.906.86-3.375s-.29-2.594-.86-3.375c-.562-.781-1.375-1.172-2.437-1.172zm0-3.5c2.633 0 4.692.715 6.172 2.14 1.477 1.419 2.22 3.387 2.22 5.907 0 2.512-.743 4.48-2.22 5.906C14.333-.317 12.274.39 9.642.39c-2.649 0-4.715-.707-6.203-2.125-1.493-1.426-2.235-3.394-2.235-5.906 0-2.52.742-4.488 2.235-5.906 1.488-1.426 3.554-2.141 6.203-2.141z"></path>
					</symbol>
					<symbol id="r" overflow="visible">
						<path d="M16.547-12.766c.613-.945 1.348-1.672 2.203-2.172.852-.5 1.79-.75 2.813-.75 1.757 0 3.097.547 4.015 1.64.926 1.087 1.39 2.657 1.39 4.72V0h-4.921v-8.345c.008-.132.016-.32.016-.562 0-1.082-.165-1.863-.485-2.343-.312-.489-.824-.735-1.531-.735-.93 0-1.648.387-2.156 1.156-.512.762-.774 1.868-.782 3.313v7.515h-4.921v-7.984c0-1.695-.149-2.785-.438-3.266-.293-.488-.812-.734-1.562-.734-.938 0-1.665.387-2.172 1.156-.512.762-.766 1.86-.766 3.297V0H2.328v-15.312H7.25v2.235c.602-.864 1.29-1.516 2.063-1.953a5.186 5.186 0 012.578-.657c1.062 0 2 .258 2.812.766.813.512 1.426 1.23 1.844 2.156z"></path>
					</symbol>
					<symbol id="q" overflow="visible">
						<path d="M17.75-9.328V0h-4.922v-7.11c0-1.343-.031-2.265-.094-2.765s-.168-.867-.312-1.11a1.994 1.994 0 00-.781-.734 2.295 2.295 0 00-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-21.28h4.89v8.203c.738-.883 1.52-1.54 2.344-1.969.832-.426 1.75-.64 2.75-.64 1.77 0 3.113.546 4.031 1.64.914 1.086 1.375 2.656 1.375 4.719z"></path>
					</symbol>
					<symbol id="p" overflow="visible">
						<path d="M2.578-20.406h5.875l7.422 14v-14h4.984V0h-5.875L7.563-14V0H2.578z"></path>
					</symbol>
					<symbol id="o" overflow="visible">
						<path d="M2.188-5.969v-9.344h4.921v1.532c0 .836-.007 1.875-.015 3.125-.012 1.25-.016 2.086-.016 2.5 0 1.242.031 2.132.094 2.672.07.542.18.933.328 1.171.207.325.473.575.797.75.32.168.691.25 1.11.25 1.019 0 1.82-.39 2.406-1.171.582-.782.875-1.868.875-3.266v-7.563h4.89V0h-4.89v-2.218c-.743.898-1.524 1.558-2.344 1.984C9.519.179 8.609.39 7.609.39c-1.761 0-3.105-.54-4.03-1.625-.93-1.082-1.391-2.66-1.391-4.734z"></path>
					</symbol>
					<symbol id="n" overflow="visible">
						<path d="M2.578-20.406h8.735c2.593 0 4.581.578 5.968 1.734 1.395 1.149 2.094 2.79 2.094 4.922 0 2.137-.7 3.782-2.094 4.938-1.386 1.156-3.375 1.734-5.968 1.734H7.828V0h-5.25zm5.25 3.813v5.703h2.922c1.02 0 1.805-.25 2.36-.75.562-.5.843-1.203.843-2.11 0-.914-.281-1.617-.844-2.11-.554-.487-1.34-.734-2.359-.734z"></path>
					</symbol>
					<symbol id="m" overflow="visible">
						<path d="M2.36-15.312h4.89V-.281c0 2.05-.496 3.617-1.484 4.703-.98 1.082-2.407 1.625-4.282 1.625H-.937V2.828h.859c.926 0 1.562-.21 1.906-.625.352-.418.531-1.246.531-2.484zm0-5.969h4.89v4H2.36z"></path>
					</symbol>
				</defs>
				<path d="M599.76 518.56l-46.48-357.84c-1.68-12.32-11.762-21.281-24.078-21.281l-78.402.004v-24.641c0-55.441-45.359-100.8-100.8-100.8s-100.8 45.359-100.8 100.8v24.64h-78.398c-12.32 0-22.961 8.962-24.078 21.282l-46.484 357.84c-1.121 6.719 1.121 14 6.16 19.039 4.48 5.039 11.2 8.398 18.48 8.398h450.8c7.281 0 14-2.8 18.48-8.398 4.48-5.04 6.719-12.316 5.602-19.04zM298.48 114.8c0-28.559 22.961-51.52 51.52-51.52s51.52 22.961 51.52 51.52v24.641H298.48zM152.32 496.72l39.762-308.56h315.28l39.762 308.56z"></path>
				<path d="M426.16 266.56c-9.52-9.52-25.199-9.52-34.719 0L350 308.001l-41.441-41.441c-9.52-9.52-25.199-9.52-34.719 0s-9.52 25.199 0 34.719l41.441 41.441-41.441 41.441c-9.52 9.52-9.52 25.199 0 34.719 5.04 5.04 11.199 7.281 17.359 7.281 6.16 0 12.32-2.238 17.359-7.281l41.441-41.441 41.441 41.441c5.04 5.04 11.199 7.281 17.359 7.281 6.16 0 12.32-2.238 17.359-7.281 9.52-9.52 9.52-25.199 0-34.719l-41.441-41.441 41.441-41.441c9.52-10.078 9.52-25.199 0-34.719z"></path>
			</svg>
			<div className="text-3xl">No products available</div>
		</div>
	);
};

export default EmptyComponent;
